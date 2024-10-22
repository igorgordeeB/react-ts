export interface Book {
    name: string
    author: string
    year: number
    pageCount: number
}

export const initialBooks: Book[] = [{
    name: "Колобок",
    author: "Толстой Алексей Николаевич",
    year: 1965,
    pageCount: 8,
  },
  {
    name: "Сила настоящего",
    author: "Экхарт Толле",
    year: 1997,
    pageCount: 256,
  },
]
