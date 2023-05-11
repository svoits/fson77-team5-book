import getBookAPI from "./getBookAPI";

async function createBookInfoCard() {
    const data = await getBookAPI('bookId');
}