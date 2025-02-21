console.log("JavaScript is running");

document.getElementById("toggle").addEventListener("change", function () {
  let models = document.querySelectorAll(".cardModel");
  let dates = document.querySelectorAll(".date");
  let prices = document.querySelectorAll(".price");
  let descriptions = document.querySelectorAll(".discription");

  if (this.checked) {
    document.body.style.backgroundColor = "rgb(19, 25, 33)";
    models.forEach((model) => {
      model.style.backgroundColor = "rgb(35, 47, 62)";
    });
    dates.forEach((date) => {
      date.style.color = "white";
    });
    prices.forEach((price) => {
      price.style.color = "white";
    });
    descriptions.forEach((description) => {
      description.style.color = "white";
    });
  } else {
    document.body.style.backgroundColor = "white";
    models.forEach((model) => {
      model.style.backgroundColor = "#f7f7f7";
    });
    dates.forEach((date) => {
      date.style.color = "black";
    });
    prices.forEach((price) => {
      price.style.color = "black";
    });
    descriptions.forEach((description) => {
      description.style.color = "black";
    });
  }
});

const cardData = [
  {
    imageSrc: "/Assets/david-marcu-78A265wPiO4-unsplash.jpg",
    description:
      'Gaiam Pilates Ring 15" Fitness Circle - Lightweight & Durable Foam Padded Handles | Flexible Resistance Exercise Equipment for Toning Arms',
    rating: 2,
    date: "December 23, 2025",
    price: "899$",
  },
  {
    imageSrc: "/Assets/grant-ritchie-YRF3nhuZ81s-unsplash.jpg",
    description:
      'Gaiam Pilates Ring 15" Fitness Circle - Lightweight & Durable Foam Padded Handles | Flexible Resistance Exercise Equipment for Toning Arms',
    rating: 2,
    date: "December 23, 2025",
    price: "550$",
  },
  {
    imageSrc: "/Assets/jack-anstey-XVoyX7l9ocY-unsplash.jpg",
    description:
      'Gaiam Pilates Ring 15" Fitness Circle - Lightweight & Durable Foam Padded Handles | Flexible Resistance Exercise Equipment for Toning Arms',
    rating: 2,
    date: "December 23, 2025",
    price: "89$",
  },
  {
    imageSrc: "/Assets/johannes-plenio-RwHv7LgeC7s-unsplash.jpg",
    description:
      'Gaiam Pilates Ring 15" Fitness Circle - Lightweight & Durable Foam Padded Handles | Flexible Resistance Exercise Equipment for Toning Arms',
    rating: 2,
    date: "December 23, 2025",
    price: "199$",
  },
  {
    imageSrc: "/Assets/kace-rodriguez-p3OzJuT_Dks-unsplash.jpg",
    description:
      'Gaiam Pilates Ring 15" Fitness Circle - Lightweight & Durable Foam Padded Handles | Flexible Resistance Exercise Equipment for Toning Arms',
    rating: 2,
    date: "December 23, 2025",
    price: "899$",
  },
  {
    imageSrc: "/Assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg",
    description:
      'Gaiam Pilates Ring 15" Fitness Circle - Lightweight & Durable Foam Padded Handles | Flexible Resistance Exercise Equipment for Toning Arms',
    rating: 2,
    date: "December 23, 2025",
    price: "999$",
  },
  {
    imageSrc: "/Assets/luca-bravo-ii5JY_46xH0-unsplash.jpg",
    description: "Explore the beauty of nature with this stunning landscape.",
    rating: 4,
    date: "January 15, 2024",
    price: "1499$",
  },
  {
    imageSrc: "/Assets/luca-bravo-zAjdgNXsMeg-unsplash.jpg",
    description: "Capture the essence of tranquility with this serene view. ",
    rating: 5,
    date: "February 10, 2024",
    price: "599$",
  },
  {
    imageSrc: "/Assets/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg",
    description: "A breathtaking scene that inspires adventure and wonder.",
    rating: 3,
    date: "March 5, 2024",
    price: "699$",
  },
  {
    imageSrc: "/Assets/matthew-feeney-75IV0_EFh0c-unsplash.jpg",
    description: "Experience the vibrant colors of this captivating landscape.",
    rating: 4,
    date: "April 20, 2024",
    price: "799$",
  },
  {
    imageSrc: "/Assets/tim-swaan-eOpewngf68w-unsplash.jpg",
    description: "Explore the beauty of nature with this stunning landscape.",
    rating: 4,
    date: "January 15, 2024",
    price: "499$",
  },
  {
    imageSrc: "/Assets/luca-bravo-zAjdgNXsMeg-unsplash.jpg",
    description: "Capture the essence of tranquility with this serene view. ",
    rating: 5,
    date: "February 10, 2024",
    price: "599$",
  },
  {
    imageSrc: "/Assets/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg",
    description: "A breathtaking scene that inspires adventure and wonder.",
    rating: 3,
    date: "March 5, 2024",
    price: "699$",
  },
  {
    imageSrc: "/Assets/v2osk-1Z2niiBPg5A-unsplash.jpg",
    description: "Experience the vibrant colors of this captivating landscape.",
    rating: 4,
    date: "April 20, 2024",
    price: "799$",
  },
  // Add more card objects as needed
];

// console.log(cardData);

function renderCards() {
  const mainContainer = document.querySelector(".mainContainer");
  if (!mainContainer) {
    console.error('No element with class "mainContainer" found.');
    return;
  }
  mainContainer.innerHTML = ""; // Clear existing content

  cardData.forEach((card) => {
    const cardElement = document.createElement("cardModel");
    cardElement.className = "cardModel";

    cardElement.innerHTML = `
            <img class="modelLogo" src="${card.imageSrc}" alt="amazon logo">
            <div class="details">
                <div class="discription">${card.description}</div>
                <div class="ratingClass">
                    ${'<img class="rating" src="/Assets/star.png" alt="amazon logo">'.repeat(
                      card.rating
                    )}
                </div>
                <div class="date">${card.date}</div>
                <div class="price">${card.price}</div>
                <div class="btnClass">
                    <div class="addCartBtn">Add</div>
                    <div class="removeCartBtn">Remove</div>
                </div>
            </div>
        `;

    mainContainer.appendChild(cardElement);
  });
}

renderCards();


document.querySelectorAll('.addCartBtn').forEach(button => {
    button.addEventListener('click', addCart);
});

document.querySelectorAll('.removeCartBtn').forEach(button => {
    button.addEventListener('click', removeCart);
});

function addCart() {
    let ele = document.getElementById('cartId');
    let currentCount = parseInt(ele.textContent, 10);
    ele.textContent = currentCount + 1;
}

function removeCart() {
    let ele = document.getElementById('cartId');
    let currentCount = parseInt(ele.textContent, 10);
    if (currentCount > 0) {
        ele.textContent = currentCount - 1;
    }
}
