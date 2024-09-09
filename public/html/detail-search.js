const categoryData = {
            
    property: {
        name: "Real Estate",
        subcategories: {
            "select":"Select a Sub Category",
            "residential property": "Residential Property",
            "commercial property": "Commercial Property",
            "lands or plots": "Lands or Plots",
            "buildings": "Buildings",
            "timseshare": "Timeshare"

        },
        specificItems: {
            "residential property": ["For Rent", "For Sale", "Daily Rental","Resale Apartment"],
            "commercial property": ["For Rent", "For Sale", "Daily Rental","Resale Apartment"],
            "lands or plots":["For Rent", "For Sale", "Daily Rental","Resale Apartment"],
            "buildings":["For Rent", "For Sale", "Daily Rental","Resale Apartment"],
            "timseshare":["For Rent", "For Sale", "Daily Rental","Resale Apartment"],   
        }
    },
    shopping: {
        name: "Used-New Shopping",
        subcategories: {
            "select":"Select a Sub Category",
            "home-appliances": "Home Appliances",
            "electronics-appliances": "Electronic Appliances",
            "watches-clocks":"Watches and Clocks",
            "antiques":"Antiques"
        },
        specificItems: {
            "home-appliances": ["Washing Machine", "Refrigerator", "Microwave"],
            "electronics-appliances": ["Television", "Vacum Cleaner", "Mobile Phone"],
            "watches-clocks":["Watch","Sand Watch","Pocket Watch","Wall Clock"],
            "antiques":["Lightning","Wall Pieces","Decoration Products","Artifical Plants","Bulk Sale"]
        }
    },
    technology: {
        name: "Laptop & Mobiles",
        subcategories: {
            "select":"Select a Sub Category",
            "computers": "Computers",
            "mobiles": "Mobile Phones"
        },
        specificItems: {
            "computers": ["Laptops", "Computers", "Work Station","Accessiories"],
            "mobiles": ["Samsung", "Apple","Huawei","One-Plus","Google Pixel","Apple","Infinix"]
        }
    },
    grooming: {
        name: "Grooming Products",
        subcategories: {
            "select":"Select a Sub Category",
            "perfumes": "Perfumes",
            "body-spray": "Body Spray",
            "oil": "Oil",
        },
        specificItems: {
            "perfums": ["Prada", "J.", "Giorgia","Carolina","Valentino"],
            "body-spray": ["Rassai", "Fog","Aseel Body Spray by Indo ","IT Body Spray","Dunhill Body Spray"],
            "oil":["Mustard Oil","Cocunat Oil","Vaseline Oil","Olive Oil"]
        }
    },

    teaching: {
        name: "Hire Tutors",
        subcategories: {
            "select":"Select a Sub Category",
            "computers": "Computers",
            "biology": "Biology",
            "math": "Math",
            "physics":"Physics",
            "chemistry":"Chemistry"
        },
        specificItems: {
            "computers": ["History", "Programming", "Systems Security","Graphics"],
            "biology": ["Science", "Botnay","Microbiology","Ecology","Zoology"],
            "math":["Probality","Statistics","Linear Algebra","Calculus"],
            "physics":["Dynamics","Mechanics","Optics","Geophysics","Electrodynamics"],
            "chemistry":["Physical Chemistry","Organic Chemistry","Inorganic Chemistry","Analytical Chemistry","Bio Chemistry"]
        }
    },
    vehicles: {
        name: "Vehicles",
        subcategories: {
            "select":"Select a Sub Category",
            "bikes": "Bikes",
            "cars": "Cars",
            "load": "Commercial Vehicles",
        },
        specificItems: {
            "bikes": ["Honda", "Yamaha", "Suzuki","Road Prince","Electric Bikes"],
            "cars": ["Honda", "Toyota","Suzuki","Nissan","Mercerdies"],
            "load":["Bus","Van","Auto Rickshaw","Chingchi","Truks"]
        }
    },
};

const categorySelect = document.getElementById('categorySelect');
const subcategorySelect = document.getElementById('subcategorySelect');
const specificItemSelect = document.getElementById('specificItemSelect');
const breadcrumb = document.getElementById('breadcrumb');

categorySelect.addEventListener('change', function() {
    const selectedCategory = this.value;
    updateSubcategories(selectedCategory);
    updateBreadcrumb(selectedCategory);
});

subcategorySelect.addEventListener('change', function() {
    const selectedCategory = categorySelect.value;
    const selectedSubcategory = this.value;
    updateSpecificItems(selectedCategory, selectedSubcategory);
    updateBreadcrumb(categorySelect.value, selectedSubcategory);
});

function updateSubcategories(category) {
    subcategorySelect.innerHTML = '';
    specificItemSelect.innerHTML = '';
    specificItemSelect.classList.add('hidden');

    if (category) {
        const subcategories = categoryData[category].subcategories;
        for (const key in subcategories) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = subcategories[key];
            subcategorySelect.appendChild(option);
        }
        subcategorySelect.classList.remove('hidden');
    } else {
        subcategorySelect.classList.add('hidden');
    }
}

function updateSpecificItems(category, subcategory) {
    specificItemSelect.innerHTML = '';
    if (subcategory) {
        const specificItems = categoryData[category].specificItems[subcategory];
        for (const item of specificItems) {
            const option = document.createElement('option');
            option.value = item.toLowerCase().replace(/ /g, '-');
            option.textContent = item;
            specificItemSelect.appendChild(option);
        }
        specificItemSelect.classList.remove('hidden');
    } else {
        specificItemSelect.classList.add('hidden');
    }
}

function updateBreadcrumb(category, subcategory = null) {
    const categoryName = category ? categoryData[category].name : 'Select a category to see details';
    const subcategoryName = subcategory ? ' > ' + categoryData[category].subcategories[subcategory] : '';
    breadcrumb.textContent = categoryName + subcategoryName;
}