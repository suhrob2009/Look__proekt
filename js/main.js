const customersList = document.querySelector('.customers-list')
const foodsSelect = document.querySelector('#foodsSelect')
const ordersList = document.querySelector('.orders-list')
const userAdd = document.querySelector('#userAdd')
const usernameInput = document.querySelector('#usernameInput')
const telephoneInput = document.querySelector('#telephoneInput')
const clientId = document.querySelector('#clientId')
const customerName = document.querySelector('.customer-name')
const foodsCount = document.querySelector('#foodsCount')

// console.log(users)
function renderUsers() {
    customersList.innerHTML = null
    for (const user of users) {
        // console.log(user.contact)

        const [li, span, a] = createElement('li', 'span', 'a');
        // const li = document.createElement('li')
        // const span = document.createElement('span')
        // const a = document.createElement('a')
        li.classList.add('customer-item')
        span.classList.add('customer-name')
        a.classList.add('customer-phone')

        a.setAttribute("href", user.contact)
        console.log(a)

        span.textContent = user.username
        a.textContent = user.contact

        li.append(span, a)

        customersList.append(li)
        li.addEventListener('click', () => {
            renderOrders(user.userId)
            clientId.innerHTML = user.userId
            customerName.innerHTML = user.username
        })

    }
}

function renderFoods() {

    for (const food of foods) {
        // console.log(food.foodname)
        const [option] = createElement('option')
        // console.log(option)
        option.value = food.foodId
        option.textContent = food.foodname
        foodsSelect.append(option)

    }
}

function renderOrders(userId) {

    ordersList.innerHTML = null
    for (const order of orders) {
        if (!(order.userId == userId)) continue
        const [elli, elimg, eldiv, elname, elcount] = createElement('li', 'img', 'div', 'span', 'span')

        elli.classList.add('order-item')
        elname.classList.add('order-name')
        elcount.classList.add('order-count')

        const food = foods.find(el => el.foodId == order.foodId)
        // console.log(food)

        elname.textContent = food.foodname
        elcount.textContent = order.count

        elimg.setAttribute('src', food.foodImg)

        eldiv.append(elname, elcount)
        elli.append(elimg, eldiv)

        ordersList.append(elli)


    }
}

function addUser() {

}
function addOrder(event) {
    event.preventDefault()

    const foodId = foodsSelect.value.trim()
    const count = foodsCount.value.trim()
    const userId = clientId.textContent.trim()
    let order = orders.find(el => el.foodId == foodId && el.userId == userId)

    if (
        !count ||
        +count > 10 ||
        !userId
    ) return
    if (order) {
        order.count = +count + +order.count
    } else {
        order = {
            foodId,
            userId,
            count
        }
        orders.push(order)

    }

    return renderOrders(userId)

}
renderUsers()
renderFoods()
renderOrders()

userAdd.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = usernameInput.value.trim()
    const contact = telephoneInput.value.trim()

    if (!username || username.length > 30) {
        return alert('Foydalanuvchi ismi xato')
    }
    if (!(/998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)) {
        return alert('Telefon raqam xato')
    }
    const newUser = {
        userId: users.length ? users[users.length - 1].userId + 1 : 1,
        username: username,
        contact: contact
    }
    users.push(newUser)
    return renderUsers()
})
foodsForm.addEventListener('submit', (event) => {
    addOrder(event)
})