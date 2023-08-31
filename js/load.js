const loadData = async () => {
    const dataUrl = await (fetch(`https://openapi.programming-hero.com/api/news/categories`));
    const data = await (dataUrl.json());
    const categories = data.data.news_category.slice(0, 5);
    // for (category of categories){
    //     console.log(category.category_name)
    //     const menu = document.getElementById('menu').appendChild(document.createElement('a' ));
    //     menu.classList = "tab tab-lg tab-lifted";
    //     menu.innerHTML = category.category_name
    // }
    categories.forEach(category => {
        console.log(category.category_name)
        document.getElementById('menu').appendChild(document.createElement("div")).innerHTML = 
        
        `
        <a onclick = "menuClick('${category.category_id}')" class =tab tab-lg tab-lifted>${category.category_name}</a>       
        `
        
    });
}
loadData();

const menuClick = async (category_id) => {
    document.getElementById('card-container').innerHTML = "";
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const data = await res.json();
    console.log(data.data);
    
    data.data.forEach((news)=>{
        const newsContainer = document.getElementById('card-container');
       
        const newsCart = document.createElement('div');
        newsCart.innerHTML=`
        <div class="card w-96 my-8 bg-base-100 shadow-xl">
        <figure><img src=${news.image_url} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${news.title}</h2>
          <p>${news.details.slice(0,150)}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        `
        newsContainer.appendChild(newsCart)
    })

}
menuClick('01')