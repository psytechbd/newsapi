const loadData = async() =>{
    const dataUrl = await(fetch(`https://openapi.programming-hero.com/api/news/categories`));
    const data = await(dataUrl.json());
    const categories = data.data.news_category.slice(0,6);
    for (category of categories){
        console.log(category.category_name)
        const menu = document.getElementById('menu').appendChild(document.createElement('a'));
        menu.classList = "tab tab-lg tab-lifted"
        menu.innerHTML = category.category_name
    }
}
loadData();