import API from './api.js';

export async function loadData() {
    const data = await API.fetchMenu();
    app.store.menu = data;
}