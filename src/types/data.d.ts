// DetailPage
export interface Book {
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
    keywordList: string[];
    categoryList: string[];
}

// Cart
export interface CartAPIType {
    CartSize: number;
    CartList: ItemsProps[];
}

export interface ItemsProps {
    bookId: number;
    title: string;
    image: string;
    discountPrice: number;
    quantity: number;
    price: number;
}

export interface CartBook {
    bookId: number;
    image: string;
    title: string;
    price: number;
    discountRate: number;
    discountPrice: number;
}

interface CartItems {
    id: number;
    name: string;
    quantity: number;
}
