interface Book {
    bookId: number;
    image: string;
    title: string;
    status: string;
    stock: number;
    views: number;
    isbn: string;
    author: string;
    price: number;
    discountRate: number;
    discountPrice: number;
    score: number;
    bookmark: boolean;
    description: string;
    publicationDate: string;
    publisher: string;
    isAdultContent: string;
    keywordList: string[];
    categoryList: string[];
}

interface CartBook {
    bookId: number;
    image: string;
    title: string;
    price: number;
    discountRate: number;
    discountPrice: number;
}
