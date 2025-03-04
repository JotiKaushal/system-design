
const data = {
    authors: [{ id: "1", name: 'joti', bookIds: ["1"] }, { id: "2", name: 'aarav', bookIds: [] }],
    books: [{ id: "1", title: "fall in love", publishedYear: 2024, authorId: "1" }]
}

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            return data.authors.find(a => a.id === parent.authorId)

        }
    }
    ,
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(book => parent.bookIds.includes(book.id))
        }
    },
    Query: {
        authors: (parent, args, context, info) => {
            return data.authors

        },
        books: (parent, args, context, info) => { return data.books },
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            const newBook = {...args, id:data.books.length+1};
            data.books.push(newBook)
            return newBook;
        }
    }
}