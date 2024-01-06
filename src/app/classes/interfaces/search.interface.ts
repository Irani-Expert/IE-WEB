export interface SearchModel {
    products: SearchProducts[],
    brokers : SearchBrokers[],
    articles : SearchArticles[],
    calendar : SearchCalendar[]
    success: true,
    message: string,
    itemSearch : string | null
}

export interface SearchProducts{
    id: number,
    title: string,
    brief: string,
    productType: number,
    productTypeTitle: string,
    platformType: number,
    platformTypeTitle: string,
    rate: number,
    minPrice: number,
    seller: string,
    cardImagePath: string,
    viewsCount: number,
    ordersCount: number,
    active : boolean
}

export interface SearchBrokers {
    id: number,
    title: string,
    brief: string,
    cardImagePath: string,
    isRTL: true,
    staticRate: number,
    updateDate: "2023-12-24T09:54:11.914Z",
    isIRSupport: true,
    commentCount: number,
    active : boolean

}

export interface SearchArticles {
    id: number,
    title: string,
    brief: string,
    cardImagePath: string,
    authorName: string,
    groupName: string,
    rate: number,
    active : boolean

}
export interface SearchCalendar{
    id: number,
    date_: string,
    secondName: string,
    importance: number,
    eventID: number,
    brief: string,
    code: string,
    currencySymbol: string
}