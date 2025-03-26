

Steps to create react app with vite
 npm create vite@latest my-app  -- --template react
npm install tailwindcss @tailwindcss/vite
in vite config
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
in css file
@import "tailwindcss";


Add routing:
install react-router-dom

add below in root component
  <!-- <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About />}></Route>
          </Route>

          <Route path="/team" element={<Team />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter> -->

////////////////////////////////////
# system-design

#testing

-Unit Testing & Integration testing
-componenet testing
-Jest and JS DOM
-Testing Library / React Testing Library

-Automation tesing
  -e2e test cases
  -tools puppeteer, cypress, selenium

  A/B testing
  split testing/ bucket testing

  -Performance testing
   lighthouse
   page speed insight
   webpage test


   TTD
   -Red - green- refactor