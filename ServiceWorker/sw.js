//service worker lifecycle
//install
//activate
const cacheName = "demo/v2";
const cachedFiles = [
    "./index.html",
    "./style.css",
    "./photo.jpg",
    "./script.js"
];
self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open(cacheName).then(cache=>{
            cache.addAll(cachedFiles)
        }).catch((err)=>{
            console.log(err);
            
        })
    )
})

self.addEventListener("activate", e=>{
    //cleanup useless cache
    e.waitUntil(
        caches.keys().then(listOfKeys=>{
            return Promise.all(
                listOfKeys.map(key =>{
                    if(key !== cacheName){
                        return caches.delete(key);
                    }
                })
            );
        })
    )
})

self.addEventListener("fetch", e=>{
//offline experince
//whenever a file is requested
/**
 * BAD EXPERIENCe
 * 1.check the cache and return from cache
 * 2. if not availabel fetch from network
 * 
 * BETTER LOGIC
 * 1. fetch from network
 * 2. update cache with new data
 * 3. if there is no network then fetch from cache
 */


//below when we are online
e.respondWith(
    //fetch from network
    fetch(e.request).then(res=>{
        //update the cache
        //clone the response other wise you will face descripancies
        const cloneData = res.clone();
        cache.open(cacheName).then(cache=>{
            cache.put(e.request, cloneData)
        })
        return res;
    }).catch((err)=>{
        return caches.match(e.request).then(res=> res);
    })
)

})