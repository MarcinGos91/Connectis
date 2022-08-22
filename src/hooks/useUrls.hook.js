

const useUrls = () => {

    const BASE_URL = 'http://localhost:1337/';
    
    return {
        BASE_URL,
        REGISTER_URL: `${BASE_URL}api/auth/local/register?populate=*`,
        LOGIN_URL: `${BASE_URL}api/auth/local?populate=*`,
        ORDERS_URL: `${BASE_URL}api/orders?populate=*`,
        NEW_ORDER_URL: `${BASE_URL}api/orders?populate=*`
    }
}

export default useUrls;
