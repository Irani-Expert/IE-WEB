export interface SearchModel {
    products: SearchProducts[],
    brokers : SearchBrokers[],
    articles : SearchArticles[]
}

export interface SearchProducts{
    id: 0,
    title: string,
    brief: string,
    productType: 0,
    productTypeTitle: string,
    platformType: 0,
    platformTypeTitle: string,
    rate: 0
}

export interface SearchBrokers {
    id: 0,
    title: string,
    brief: string,
    cardImagePath: string,
    isRTL: true,
    staticRate: 0,
    updateDate: "2023-12-24T09:54:11.914Z",
    isIRSupport: true,
    commentCount: 0
}

export interface SearchArticles {
    id: 0,
    title: string,
    brief: string,
    cardImagePath: string,
    authorName: string,
    groupName: string,
    rate: 0
}