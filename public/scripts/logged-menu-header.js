
    const userLocalData = JSON.parse(localStorage.getItem('user'))
    const headerUserName = document.querySelector('.user-accont')

    if(userLocalData && headerUserName) {
        const nameArray = userLocalData.name.split(' ')
        
        headerUserName.href= `/usuario/${userLocalData.slug}`
        headerUserName.innerHTML = `<span class="name-user" id="name-user">Olá, ${nameArray[0]}</span>
                                    <div class="arrow material-symbols-outlined">expand_more</div> 
                                    <ul>
                                        <li><a href="/usuario/${userLocalData.slug}">Minha conta</a></li>
                                        <li><a class="logout" id="logout" href="/usuario/${userLocalData.slug}/sair">Sair</a></li>
                                    </ul>`
    }
