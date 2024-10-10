// Não alterar o código sem autorização do Desenvolvedor Chefe!

// Eventos de DOMContentLoaded.
document.addEventListener('DOMContentLoaded', function () {
    // Defina aqui o produto padrão.
    updateProduct('Gola Paul (Macho)', 'Superman-1', '25.00',
        'O Kit com 10 Unidades Gola Paul (Macho) oferece estilo e conforto para seu pet. Feitas com materiais duráveis, são ideais para passeios e ocasiões especiais.',
        1, 'Assets/Img/Img.Store/Gola-Paul-1.png');
    updateProduct('Camisa Pet (Macho)', '15 Lisas', '25.00',
        'O Kit com 15 Unidades Camisa Pet (Macho) de cores lisas é ideal para seu pet. Feitas com tecido leve, oferecem conforto e estilo para todas as ocasiões.',
        2, 'Assets/Img/Img.Store/Camisa-Macho.png');
    updateProduct('Gravata Borboleta (Macho)', 'KIT-15', '25.00',
        'O Kit com 15 Unidades Gravata Borboleta (Macho) de cores sortidas é ideal para ocasiões especiais. Confeccionadas com materiais de qualidade, elas oferecem estilo e conforto ao seu pet.',
        3, 'Assets/Img/Img.Store/Gravatas-1.png');
    updateProduct('Gravata Luxo (Macho)', 'Pato Donald', '25.00',
        'O Kit com 10 Unidades Gravata Luxo (Macho) é perfeito para seu pet. Feitas com materiais elegantes, proporcionam um toque sofisticado e conforto em todas as ocasiões.',
        4, 'Assets/Img/Img.Store/Gravatas-Luxo-1.png');
    updateProduct('Gravata Dia a Dia', 'KIT-15', '25.00',
        'O Kit com 15 Unidades Gravata Dia a Dia com estampas sortidas é ideal para pets estilosos. Confeccionadas com tecidos leves, oferecem conforto e charme para o uso diário.',
        5, 'Assets/Img/Img.Store/Gravatas-2.png');
    updateProduct('Gargantilhas (Fêmea)', 'KIT-15', '25.00',
        'O Kit com 15 Unidades Gargantilhas (Fêmea) com estampas sortidas é perfeito para seu pet. Confeccionadas com materiais confortáveis, oferecem estilo e versatilidade em todas as ocasiões.',
        6, 'Assets/Img/Img.Store/Gargantilhas-Femeas.png');
    updateProduct('Gargantilhas em V com Renda', 'KIT-10', '25.00',
        'O Kit com 10 Unidades Gargantilhas em V com Renda de cores sortidas é ideal para pets que amam estilo. Confeccionadas com materiais de qualidade, oferecem charme e conforto.',
        7, 'Assets/Img/Img.Store/Gargantilhas-1.png');
    updateProduct('Colarinho Mini Pompom (Macho)', 'KIT-10', '25.00',
        'O Kit com 10 Unidades Colarinho Mini Pompom (Macho) com estampas sortidas é perfeito para pets estilosos. Confeccionados com materiais leves, oferecem conforto e um visual adorável.',
        8, 'Assets/Img/Img.Store/Colarinho-1.png');
    updateProduct('Gravata Colarinho (Macho)', 'KIT-15', '25.00',
        'O Kit com 15 Unidades Gravata Colarinho (Macho) com estampas sortidas é perfeito para ocasiões especiais. Confeccionadas com materiais de qualidade, oferecem estilo e conforto para seu pet.',
        9, 'Assets/Img/Img.Store/Gravatas-Colarinho-Macho.png');
    updateProduct('Colarinho (Macho)', 'KIT-10', '25.00',
        'O Kit com 10 Unidades Colarinho (Macho) com estampas sortidas é perfeito para pets estilosos. Confeccionados com materiais confortáveis, proporcionam um visual charmoso em diversas ocasiões.',
        10, 'Assets/Img/Img.Store/Colarinho-Macho-1.png');
    updateProduct('Colarinho (Fêmea)', 'KIT-10', '25.00',
        'O Kit com 10 Unidades Colarinho (Fêmea) com estampas sortidas é ideal para pets charmosas. Confeccionados com materiais de qualidade, oferecem estilo e conforto em qualquer ocasião.',
        11, 'Assets/Img/Img.Store/Colarinho-Femea.png');

    // Eventos da barra de navegação.
    const toggleNavBtn = document.getElementById("toggleNavBtn");
    const navLinks = document.querySelector(".nav-links");
    const navBar = document.querySelector(".nav-bar");

    toggleNavBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        navBar.classList.toggle("active");
        toggleNavBtn.classList.toggle("change");
    });

    // Eventos do carrinho de produtos.
    const toggleCartBtn = document.getElementById("toggleCartBtn");
    const closeCartBtn = document.getElementById('closeCart');
    const cartSection = document.querySelector(".cart-section");
    const observer = new MutationObserver(() => {
        handleRemoveProductListeners();
    });

    function handleCartForLargerScreens() {
        const isCartVisible = cartSection.classList.contains('show');

        if (isCartVisible) {
            cartSection.classList.remove('show');
            cartSection.style.display = 'none';
        } else {
            cartSection.style.display = 'block';
            cartSection.classList.add('show');
        }

        toggleCartBtn.textContent = isCartVisible ? 'Abrir Carrinho' : 'Fechar Carrinho';
    }

    function handleCartForSmallerScreens() {
        const isCartVisible = cartSection.classList.contains('show');

        if (isCartVisible) {
            cartSection.classList.remove('show');
            cartSection.classList.remove('slideInCart');
            cartSection.classList.add('slideOutCart');

            setTimeout(() => {
                cartSection.style.display = 'none';
            }, 300);

            toggleCartBtn.textContent = 'Abrir Carrinho';
        } else {
            cartSection.classList.remove('slideOutCart');
            cartSection.classList.add('slideInCart');

            setTimeout(() => {
                cartSection.style.display = 'block';
                cartSection.classList.add('show');
            }, 0);

            toggleCartBtn.textContent = 'Fechar Carrinho';
        }
    }

    toggleCartBtn.addEventListener("click", function () {
        if (window.innerWidth < 1024) {
            handleCartForSmallerScreens();
        } else {
            handleCartForLargerScreens();
        }
    });

    closeCartBtn.addEventListener('click', function () {
        if (window.innerWidth < 1024) {
            handleCartForSmallerScreens();
        } else {
            handleCartForLargerScreens();
        }
    });

    observer.observe(cartSection, {
        childList: true,
        subtree: true
    });

    document.querySelector('.cart-section').addEventListener('change', function (event) {
        if (event.target.classList.contains('quantity')) {
            validateQuantity(event.target);
            updateSubtotal(event.target);
            handleCartChange(true);
        }
    });

    // Eventos do formulário de pedido
    document.getElementById('closeFormBtn').addEventListener('click', closeOrderForm);
    document.getElementById('openCartInForm').addEventListener('click', openCartInForm);
    document.getElementById('submitOrderBtn').addEventListener('click', submitOrder);

    document.getElementById('confirmButton').addEventListener('click', function () {
        openOrderForm();
    });
    document.getElementById('firstName').addEventListener('input', function () {
        capitalizeInput(this);
    });
    document.getElementById('lastName').addEventListener('input', function () {
        capitalizeInput(this);
    });
    document.getElementById('telephone').addEventListener('input', function () {
        validateTelephone(this);
    });
    document.getElementById('cpfCnpj').addEventListener('input', function () {
        validateCpfCnpj(this);
    });
    document.getElementById('cep').addEventListener('input', function () {
        validateCep(this);
    });
    document.getElementById('address').addEventListener('input', function () {
        capitalizeInput(this);
    });
    document.getElementById('city').addEventListener('input', function () {
        capitalizeInput(this);
    });
    document.getElementById('state').addEventListener('input', function () {
        capitalizeInput(this);
    });
    document.getElementById('addressNumber').addEventListener('input', function () {
        validateNumber(this);
    });
    document.getElementById('addressComplement').addEventListener('input', function () {
        capitalizeInput(this);
    });

    // Adicionar event listeners ao input do cep.
    document.querySelector('#cep').addEventListener('input', function () {
        const cep = this.value.replace(/\D/g, '');

        if (cep.length === 8) {
            handleCartChange(true);
            searchAddress();
        } else {
            displayShippingOptions([]);
        }
    });

    // Adicionar event listeners aos botões dos produtos.
    document.querySelectorAll('.version-btn').forEach(button => {
        button.addEventListener('click', function () {
            const product = this.getAttribute('data-product');
            const volume = this.getAttribute('data-volume');
            const price = this.getAttribute('data-price');
            const description = this.getAttribute('data-description');
            const productId = this.getAttribute('data-product-id');
            const imageSrc = this.getAttribute('data-image-src');

            updateProduct(product, volume, price, description, productId, imageSrc);
        });
    });

    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(button.getAttribute('data-product-id'));
            addToCart(productId);
            handleCartChange(true);
        });
    });
});

//Funções do e-commerce:
// Declaração de variáveis para armazenar os elementos do DOM e controlar o estado da página.
let selectedProduct = {
    name: "",
    volume: "",
    price: "",
    description: ""
};

const productIdMap = {
    'Carvalho (670ml)': 'carvalho670ml',
    'Carvalho (750ml)': 'carvalho750ml',
    'Amburana (275ml)': 'amburana275ml',
    'Amburana (670ml)': 'amburana670ml',
    'Amburana (750ml)': 'amburana750ml',
    'Prata (275ml)': 'prata275ml',
    'Prata (670ml)': 'prata670ml',
    'Jequitibá (275ml)': 'jequitiba275ml',
    'Kit de 275ml (1A, 1P, 1J)': 'kit275ml',
    'Kit de 275ml (1A, 1C, 1J)': 'kit275ml'
};

let fetchTimeout = null;
let selectedShippingOption = null;
let lastValidChange = false;

// Atualiza os detalhes de um produto específico na interface usando os dados fornecidos.
function updateProduct(name, volume, price, description, productId, imageSrc) {
    selectedProduct.name = name;
    selectedProduct.volume = volume;
    selectedProduct.price = price;
    selectedProduct.description = description;

    const productContainer = document.querySelector(`.product:nth-child(${productId})`);

    const nameSpan = productContainer.querySelector('.details .name');
    nameSpan.textContent = name;

    const volumeSpan = productContainer.querySelector('.details .volume');
    volumeSpan.textContent = `(${volume})`;

    const priceSpan = productContainer.querySelector('.details .price');
    priceSpan.textContent = `R$ ${price}`;

    const descriptionParagraph = productContainer.querySelector('.product-photo .description');
    descriptionParagraph.innerHTML = description;

    const productImage = productContainer.querySelector('.product-photo .photo-main img');
    productImage.src = imageSrc;
}

// Adiciona produtos ao carrinho com base no ID, ou alerta se o produto não existir, e atualiza o total.
function addToCart(productId) {
    if (productId >= 1 && productId <= 11) {
        addProductToCart(productId);
    } else {
        alert('Produto não encontrado.');
    }

    updateTotal();
}

// Funções para lidar com os produtos:
// Adiciona um produto ao carrinho, verificando se ele já está presente; se sim, incrementa a quantidade, caso contrário, cria um novo item no carrinho.
function addProductToCart(productId) {
    const productContainer = document.querySelector(`.product:nth-child(${productId})`);
    if (!productContainer) {
        alert('Produto não encontrado.');
        return;
    }

    const name = productContainer.querySelector('.details .name').textContent;
    const volume = productContainer.querySelector('.details .volume').textContent;
    const price = parseFloat(productContainer.querySelector('.details .price').textContent.replace('R$ ', ''));
    const itemIdentifier = `${name} ${volume}`;

    let productFound = false;
    const cartItems = document.querySelectorAll('.cart-item');

    for (let cartItem of cartItems) {
        const itemName = cartItem.getAttribute('data-name');
        if (itemName === itemIdentifier) {
            const quantityInput = cartItem.querySelector('.quantity');
            let currentQuantity = parseInt(quantityInput.value);
            currentQuantity = isNaN(currentQuantity) || currentQuantity < 1 ? 1 : currentQuantity;
            if (currentQuantity < 2) {
                currentQuantity++;
                quantityInput.value = currentQuantity;
                updateSubtotal(quantityInput);
                showMessage('Produto Adicionado');
            }
            productFound = true;
            break;
        }
    }

    if (!productFound) {
        const cartItem = createCartItem(itemIdentifier, price);
        document.querySelector('.cart').appendChild(cartItem);
        updateTotal();
        showMessage('Produto Adicionado');
    } else {
        updateTotal();
    }
}

// Exibe uma mensagem temporária na tela que desaparece após a animação de exibição ao adicionar um produto ao carrinho.
function showMessage(message) {
    const messageCard = document.createElement('div');
    messageCard.classList.add('message-card');
    messageCard.textContent = message;
    document.body.appendChild(messageCard);

    messageCard.style.display = 'block';

    messageCard.addEventListener('animationend', () => {
        document.body.removeChild(messageCard);
    });
}

// Funções para lidar com o carrinho de produtos:
// Cria um item no carrinho com detalhes do produto, incluindo botão de remover, quantidade, nome, preço e subtotal.
function createCartItem(itemIdentifier, price) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-name', itemIdentifier);

    // Botão de remover
    const removeButton = document.createElement('button');
    removeButton.classList.add('removeBtn');
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', function (event) {
        removeFromCart(event);
    });
    cartItem.appendChild(removeButton);

    // Nome do item
    const cartName = document.createElement('span');
    cartName.classList.add('cart-name');
    cartName.textContent = itemIdentifier;
    cartItem.appendChild(cartName);
    cartItem.appendChild(document.createElement('br'));


    // Preço do item
    const cartPrice = document.createElement('span');
    cartPrice.classList.add('cart-price');
    cartPrice.textContent = `R$ ${price.toFixed(2)} (Unidade)`;
    cartItem.appendChild(cartPrice);
    cartItem.appendChild(document.createElement('br'));

    // Input de quantidade do produto
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.classList.add('quantity');
    quantityInput.value = '1';
    quantityInput.min = '1';
    quantityInput.max = '12';
    quantityInput.autocomplete = 'off';
    quantityInput.name = 'quantity';
    quantityInput.addEventListener('change', function () {
        validateQuantity(quantityInput);
        updateSubtotal(quantityInput);

    });
    cartItem.appendChild(quantityInput);

    // Subtotal do item
    const subtotalSpan = document.createElement('span');
    subtotalSpan.classList.add('subtotal');
    subtotalSpan.textContent = `Subtotal: R$ ${price.toFixed(2)}`;
    cartItem.appendChild(subtotalSpan);

    // Divisória entre itens
    const separator = document.createElement('hr');
    separator.classList.add('cart-item-separator');
    cartItem.appendChild(separator);

    return cartItem;
}

// Remove um item do carrinho com base no botão de remoção clicado e atualiza o total.
function removeFromCart(event) {
    if (event.target.classList.contains('removeBtn')) {
        const cartItem = event.target.closest('.cart-item');
        const cartItemName = cartItem.getAttribute('data-name');
        const cartItems = document.querySelectorAll(`.cart-item[data-name="${cartItemName}"]`);
        cartItems.forEach(item => item.remove());
        updateTotal();
    }
}

// Coleta os itens do carrinho e retorna um objeto com os IDs dos produtos e suas quantidades.
function getCartItems() {
    const cartItems = document.querySelectorAll('.cart-item');
    let units = {};

    cartItems.forEach(item => {
        const productName = item.querySelector('.cart-name').textContent.trim();
        const quantity = parseInt(item.querySelector('.quantity').value, 10);
        const productId = productIdMap[productName];

        if (productId && quantity > 0) {
            units[productId] = quantity;
        }
    });

    return units;
}

// Funções para lidar com o manuseio dos produtos adicionados e removidos:
// Atualiza a quantidade e o subtotal de um item no carrinho ao clicar em um botão.
function updateSubtotalByButton(button) {
    const cartItem = button.closest('.cart-item');
    const quantityInput = cartItem.querySelector('.quantity');
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity = isNaN(currentQuantity) ? 0 : currentQuantity;
    const updatedQuantity = currentQuantity + 1;
    quantityInput.value = updatedQuantity;
    updateSubtotal(quantityInput);
}

// Atualiza a quantidade e o subtotal de um item no carrinho ao interagir com o input.
function updateSubtotal(input) {
    const cartItem = input.closest('.cart-item');
    const price = parseFloat(cartItem.querySelector('.cart-price').textContent.replace('R$ ', ''));
    let quantity = parseInt(input.value);
    quantity = isNaN(quantity) || quantity < 1 ? 1 : quantity;
    input.value = quantity;
    const subtotal = price * quantity;
    cartItem.querySelector('.subtotal').textContent = `Subtotal: R$ ${subtotal.toFixed(2)}`;
    updateTotal();
}

// Calcula o total do carrinho somando os subtotais de cada item.
function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(cartItem => {
        const priceText = cartItem.querySelector('.cart-price').textContent;
        const price = parseFloat(priceText.replace('R$ ', ''));
        const quantity = parseInt(cartItem.querySelector('.quantity').value);

        if (!isNaN(price) && !isNaN(quantity)) {
            const subtotal = price * quantity;
            total += subtotal;
        }
    });

    document.getElementById('totalAmount').textContent = `R$ ${total.toFixed(2)}`;
}

// Funções para lidar com o manuseio do formulário do pedido:
// Controla a visibilidade do carrinho de produtos dentro do formulário.
function openCartInForm() {
    const cartSection = document.querySelector('.cart-section');
    const isCartVisible = cartSection.classList.contains('show');
    cartSection.classList.toggle('show');
    cartSection.style.display = isCartVisible ? 'none' : 'block';
    toggleCartBtn.textContent = isCartVisible ? 'Abrir Carrinho' : 'Fechar Carrinho';
}

// Abre o formulário para envio do pedido.
function openOrderForm() {
    const orderSection = document.querySelector('.order-section');
    const orderFormContainer = document.getElementById('orderFormContainer');
    const toggleCartBtn = document.getElementById("toggleCartBtn");
    const cartItems = document.querySelectorAll('.cart-item');
    const cartSection = document.querySelector('.cart-section');
    const isCartVisible = cartSection.classList.contains('show');
    const pageSection = document.getElementById('page');
    const productsSection = document.getElementById('products');
    const footerSection = document.querySelector('footer');
    const itemsSection = document.getElementById('itens');
    const aboutSection = document.getElementById('about');

    if (cartItems.length > 0) {
        cartSection.classList.toggle('show');
        cartSection.style.display = isCartVisible ? 'none' : 'block';
        toggleCartBtn.textContent = isCartVisible ? 'Abrir Carrinho' : 'Fechar Carrinho';
        orderSection.style.display = 'block';
        orderFormContainer.style.display = 'block';
        pageSection.style.display = 'none';
        productsSection.style.display = 'none';
        footerSection.style.display = 'none';
        itemsSection.style.display = 'none';
        aboutSection.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        alert('Eita... Não há nenhum produto em seu carrinho vamos mudar isso!');
        orderSection.style.display = 'none';
        orderFormContainer.style.display = 'none';
        cartSection.style.display = 'none';
        cartSection.classList.remove('show');
        cartSection.style.display = isCartVisible ? 'none' : 'block';
        toggleCartBtn.textContent = isCartVisible ? 'Abrir Carrinho' : 'Fechar Carrinho';
        itemsSection.style.display = '';
        aboutSection.style.display = '';
        pageSection.style.display = '';
        productsSection.style.display = '';
        footerSection.style.display = '';
    }
}

// Fecha o formulário do pedido.
function closeOrderForm() {
    const orderSection = document.querySelector('.order-section');
    const toggleCartBtn = document.getElementById("toggleCartBtn");
    const cartSection = document.querySelector('.cart-section');
    const pageSection = document.getElementById('page');
    const productsSection = document.getElementById('products');
    const footerSection = document.querySelector('footer');
    const itemsSection = document.getElementById('itens');
    const aboutSection = document.getElementById('about');

    orderSection.style.display = 'none';
    cartSection.classList.remove('show');
    cartSection.style.display = 'none';
    toggleCartBtn.textContent = 'Abrir Carrinho';
    itemsSection.style.display = '';
    aboutSection.style.display = '';
    pageSection.style.display = '';
    productsSection.style.display = '';
    footerSection.style.display = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Exibe as opções de frete no carrinho.
function displayShippingOptions(options) {
    const container = document.getElementById('shippingOptionsContainer');
    container.innerHTML = '';

    if (options.length === 0) {
        const noOptionsMessage = document.createElement('div');
        noOptionsMessage.textContent = '';
        container.appendChild(noOptionsMessage);
        updateCartWithShipping(0);
        return;
    }

    let newSelectedOption = selectedShippingOption;

    options.forEach(option => {
        const price = parseFloat(option.price);

        if (!isNaN(price)) {
            const optionElement = document.createElement('div');
            optionElement.classList.add('shipping-option');
            optionElement.innerHTML = `
                <label>Opção de Frete:<br>
                    <input type="radio" name="shippingOption" value="${price}" data-service="${option.name}">
                    ${option.name}(Correios) - R$ ${price.toFixed(2)}<br>
                    Prazo para entrega: ${option.delivery_time} dias
                </label>
            `;
            container.appendChild(optionElement);

            if (price === selectedShippingOption) {
                newSelectedOption = price;
            }
        }
    });

    document.querySelectorAll('input[name="shippingOption"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const price = parseFloat(this.value);
            selectedShippingOption = price;
            updateCartWithShipping(price);
        });
    });
}

// Atualiza o total do carrinho incluindo o custo de envio.
function updateCartWithShipping(shippingCost) {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(cartItem => {
        const priceText = cartItem.querySelector('.cart-price').textContent;
        const price = parseFloat(priceText.replace('R$ ', ''));
        const quantity = parseInt(cartItem.querySelector('.quantity').value);

        if (!isNaN(price) && !isNaN(quantity)) {
            const subtotal = price * quantity;
            total += subtotal;
        }
    });

    if (!isNaN(shippingCost) && shippingCost > 0) {
        total += shippingCost;
        document.getElementById('totalAmount').textContent = `R$ ${total.toFixed(2)} (Frete incluído)`;
    } else {
        document.getElementById('totalAmount').textContent = `R$ ${total.toFixed(2)}`;
    }
}

// Atualiza o estado da última alteração do carrinho e, se o CEP não estiver vazio, chama a função debouncedFetchFreight.
function handleCartChange(isValidChange = true) {
    lastValidChange = isValidChange;
    if (document.querySelector('#cep').value.trim() !== '') {
        debouncedFetchFreight();
    }
}

// Adiciona listeners de remoção para os botões de remover produtos, chamando handleCartChange quando clicados.
function handleRemoveProductListeners() {
    document.querySelectorAll('.removeBtn').forEach(button => {
        button.addEventListener('click', function () {
            handleCartChange(true);
        });
    });
}

handleRemoveProductListeners();

// Verifica se todos os campos obrigatórios do formulário estão preenchidos e retorna um booleano.
function isFormValid() {
    const inputs = document.querySelectorAll('#orderForm input:required');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
    });

    return isValid;
}

// Funções auxiliares do código:
// Função para manusear a posição do botão de envio conforme o tamanho da tela.
function moveSubmitButton() {
    var submitBtn = document.getElementById('submitOrderBtn');
    var form = document.querySelector('form');
    var originalPosition = document.querySelector('.form-column');

    if (submitBtn && form && originalPosition) {
        if (window.innerWidth <= 1024) {
            form.appendChild(submitBtn);
        } else {
            originalPosition.appendChild(submitBtn);
        }
    }
}

window.addEventListener('resize', moveSubmitButton);
window.addEventListener('load', moveSubmitButton);

// Função para manusear a posição do frete conforme o tamanho da tela.
function moveShippingOptions() {
    const shippingOptions = document.getElementById('shippingOptionsContainer');
    const addressColumn = document.getElementById('addressFormColumn');

    if (window.innerWidth < 1024) {
        if (!addressColumn.contains(shippingOptions)) {
            addressColumn.appendChild(shippingOptions);
        }
    } else {
        const formNavBar = document.getElementById('formNavBar');
        if (formNavBar && !formNavBar.contains(shippingOptions)) {
            formNavBar.appendChild(shippingOptions);
        }
    }
}

window.addEventListener('DOMContentLoaded', moveShippingOptions);
window.addEventListener('resize', moveShippingOptions);

// Valida a quantidade do produto, garantindo que fique entre 1 e 2.
function validateQuantity(input) {
    if (input.classList.contains('quantity')) {
        let value = parseInt(input.value);
        if (value > 2) {
            input.value = 1;
        } else if (value < 1) {
            input.value = 1;
        }
    }
}

// Valida e formata CPF ou CNPJ de acordo com o valor digitado.
function validateCpfCnpj(input) {
    var value = input.value.replace(/\D/g, '');
    var label = document.querySelector("label[for='cpfCnpj']");

    if (value.length <= 11) { // Formatar como CPF
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else { // Formatar como CNPJ
        value = value.replace(/(\d{2})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1/$2');
        value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
    }

    input.value = value;

    if (value.length === 14) {
        input.setCustomValidity('');
        input.setAttribute('placeholder', 'CPF');
        label.textContent = 'CPF';
    } else if (value.length === 18) {
        input.setCustomValidity('');
        input.setAttribute('placeholder', 'CNPJ');
        label.textContent = 'CNPJ';
    } else {
        input.setCustomValidity('CPF ou CNPJ inválido');
        label.textContent = 'CPF ou CNPJ';
    }
}

// Valida e formata o CEP, adicionando o hífen quando apropriado.
function validateCep(input) {
    var value = input.value.replace(/\D/g, '');

    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{0,3})$/, '$1-$2');
    }

    input.value = value;
}

// Remove caracteres não numéricos do telefone.
function validateTelephone(input) {
    var value = input.value.replace(/\D/g, '');
    input.value = value;
}

// Remove caracteres não numéricos de um campo de número.
function validateNumber(input) {
    var value = input.value.replace(/\D/g, '');
    input.value = value;
}

// Capitaliza a primeira letra de cada palavra em uma string.
function capitalizeFirstLetter(string) {
    return string.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    });
}

// Capitaliza a primeira letra do valor de um campo de entrada.
function capitalizeInput(inputField) {
    inputField.value = capitalizeFirstLetter(inputField.value);
}

// Retorna uma função que limita a execução de 'func' para após 'wait' milissegundos de inatividade.
function debounce(func, wait) {
    return function (...args) {
        clearTimeout(fetchTimeout);
        fetchTimeout = setTimeout(() => func(...args), wait);
    };
}

const debouncedFetchFreight = debounce(fetchFreight, 1000);

// Funções do tipo fetch para comunicação com o servidor e APIs:
// Função para procurar um endereço com base no cep informado e preencher o formulário do pedido.
function searchAddress() {
    const cep = document.getElementById('cep').value;
    if (cep.length === 9) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('address').value = data.logradouro;
                    document.getElementById('city').value = data.localidade;
                    document.getElementById('state').value = data.uf;
                } else {
                    alert('CEP não encontrado! Por favor verifique o CEP digitado.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar endereço:', error);
                alert('Ocorreu um erro ao buscar o endereço. Por favor tente novamente mais tarde.');
            });
    } else {
        alert('Por favor insira um CEP válido.');
    }
}

// Função assíncrona para calcular o frete do carrinho de produtos.
async function fetchFreight() {
    const postalCode = document.querySelector('#cep').value;
    const units = getCartItems();

    if (postalCode && Object.keys(units).length > 0 && lastValidChange) {
        try {
            const response = await fetch('https://servercachacacapitao.vercel.app/calculateFreight', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    toPostalCode: postalCode,
                    units: units
                })
            });

            const data = await response.json();
            console.log('Resposta do servidor:', data);

            if (data.success) {
                displayShippingOptions(data.data);
            } else {
                alert(data.message || "Erro ao calcular frete.");
                displayShippingOptions([]);
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert("Erro ao calcular frete, verifique o CEP digitado e tenha pelo menos um produto no carrinho.");
            displayShippingOptions([]);
        }
    } else {
        displayShippingOptions([]);
    }
    lastValidChange = false;
}

// Função para enviar o pedido para o servidor.
function submitOrder(event) {
    const orderSection = document.querySelector('.order-section');
    const orderFormContainer = document.getElementById('orderFormContainer');
    const cartItems = document.querySelectorAll('.cart-item');
    const pageSection = document.getElementById('page');
    const productsSection = document.getElementById('products');
    const footerSection = document.querySelector('footer');
    const loadingModal = document.getElementById('loadingModal');
    const loadingMessage = document.getElementById('loadingMessage');
    const statusIcon = document.getElementById('statusIcon');
    const spinner = document.querySelector('.spinner');
    const itemsSection = document.getElementById('itens');
    const aboutSection = document.getElementById('about');

    event.preventDefault();

    if (!isFormValid()) {
        alert('Por favor, preencha todos os campos no formulário.');
        return;
    }

    if (cartItems.length === 0) {
        alert('Eita... Não há nenhum produto em seu carrinho. Vamos mudar isso!');
        orderSection.style.display = 'none';
        orderFormContainer.style.display = 'none';
        itemsSection.style.display = 'none';
        aboutSection.style.display = 'none';
        pageSection.style.display = '';
        productsSection.style.display = '';
        footerSection.style.display = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const telephone = document.getElementById('telephone').value;
    const cpfCnpj = document.getElementById('cpfCnpj').value.trim();
    const cep = document.getElementById('cep').value;
    const address = document.getElementById('address').value;
    const addressComplement = document.getElementById('addressComplement').value.trim();
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const number = document.getElementById('addressNumber').value;
    const emailLabel = document.getElementById('email').value;

    const cartData = Array.from(cartItems).map(cartItem => {
        const name = cartItem.querySelector('.cart-name').textContent;
        const priceString = cartItem.querySelector('.cart-price').textContent.replace('R$ ', '');
        const price = parseFloat(priceString);
        const quantity = parseInt(cartItem.querySelector('.quantity').value);
        const subtotal = price * quantity;
        return { name, price, quantity, subtotal };
    });

    let totalAmount = cartData.reduce((total, item) => total + item.subtotal, 0);

    const shippingOption = document.querySelector('input[name="shippingOption"]:checked');
    if (!shippingOption) {
        alert('Por favor, escolha um serviço de frete para enviar o pedido.');
        return;
    }
    const shippingService = {
        name: shippingOption.getAttribute('data-service'),
        price: parseFloat(shippingOption.value)
    };

    totalAmount += shippingService.price;

    const requestData = {
        firstName,
        lastName,
        telephone,
        cpfCnpj,
        cep,
        address,
        addressComplement,
        city,
        state,
        number,
        emailLabel,
        cart: cartData,
        totalAmount: totalAmount.toFixed(2),
        shippingService
    };

    loadingModal.style.display = 'flex';

    fetch('https://servercachacacapitao.vercel.app/sendOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao enviar o pedido.');
            }
        })
        .then(data => {
            console.log('Pedido enviado com sucesso:', data);
            loadingMessage.textContent = 'Pedido enviado com sucesso! Verifique seu e-mail para acessar o link de pagamento';
            statusIcon.classList.add('success');
            statusIcon.innerHTML = '✔';
            spinner.style.display = 'none';
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('telephone').value = '';
            document.getElementById('cpfCnpj').value = '';
            document.getElementById('cep').value = '';
            document.getElementById('address').value = '';
            document.getElementById('addressComplement').value = '';
            document.getElementById('city').value = '';
            document.getElementById('state').value = '';
            document.getElementById('addressNumber').value = '';
            document.getElementById('email').value = '';

            const cartItems = document.querySelectorAll('.cart-item');
            cartItems.forEach(cartItem => {
                const removeBtn = cartItem.querySelector('.removeBtn');
                if (removeBtn) {
                    removeFromCart({ target: removeBtn });
                }
            });

            const shippingOptions = document.querySelectorAll('input[name="shippingOption"]');
            shippingOptions.forEach(option => {
                option.checked = false;
            });

            displayShippingOptions([]);

            localStorage.setItem('lastOrderTime', Date.now().toString());
        })
        .catch(error => {
            console.error('Erro ao enviar o pedido:', error);
            loadingMessage.textContent = 'Erro de conexão com o servidor, Tente novamente mais tarde.';
            statusIcon.classList.add('error');
            statusIcon.innerHTML = '✖';
            spinner.style.display = 'none';
        })
        .finally(() => {
            setTimeout(() => {
                loadingModal.style.display = 'none';
                loadingMessage.textContent = 'Enviando pedido...';
                statusIcon.classList.remove('success', 'error');
                statusIcon.innerHTML = '';
                spinner.style.display = 'block';
            }, 10000);
        });
}