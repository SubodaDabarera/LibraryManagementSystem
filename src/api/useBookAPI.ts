import { API_URL, ApiRoutes } from '../lib/enums/ApiRoutes'
import axios from 'axios'
import { Response } from '../lib/types/Response'

function useBookAPI() {

    const BOOK_URL = API_URL + ApiRoutes.Books

    const getBooksApi = async() : Promise<Response> => {
        const bookData = await axios.get(BOOK_URL)
        if(bookData.status === 200){
            return { isSuccess: true, data: bookData.data, message: "Books retrieved Successfully" };
        }
        return { isSuccess: false, data: {}, message: "Books retrieved Unsuccessfully" };
    }

    const getBookByIdApi = async (bookId: string) : Promise<Response> => {
        const bookDetails = await axios.get(BOOK_URL+"/"+bookId)
        if(bookDetails.status === 200){
            return { isSuccess: true, data: bookDetails.data, message: "Book Details retrieved Successfully" };
        }
        
        return { isSuccess: false, data: {}, message: "Book Details retrieved Unsuccessfully" };
    }

  return {getBooksApi, getBookByIdApi}
}

export default useBookAPI