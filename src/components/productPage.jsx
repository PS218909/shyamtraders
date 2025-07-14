import greenGram from '../assets/bg-images/green-grams.jpg'
import maize from '../assets/bg-images/maize.jpg'
import blackGram from '../assets/bg-images/Black_gram.jpg'
import groundNut from '../assets/bg-images/groundNuts.jpg'
import mahuaFlower from '../assets/bg-images/mahua-flowers.jpg'
import mahuaSeeds from '../assets/bg-images/mahua-seeds.jpg'
import millets from '../assets/bg-images/millets.jpg'
import rice from '../assets/bg-images/rice.jpg'
import sesameSeeds from '../assets/bg-images/sesame-seeds.jpg'
import driedRagi from '../assets/bg-images/dried-ragi.jpg'

const ProductPage = () => {
    const products = {
        'ground-nuts': {
            img: groundNut,
            description: {
                name: "Ground Nuts",
                'short-desc': "Rich in healthy fats, protein, and antioxidants for overall wellness.",
                'health-benefits': [
                    "Promotes heart health by lowering bad cholesterol.",
                    "Supports muscle growth and energy production."
                ]
            }
        },
        'green-grams': {
            img: greenGram,
            description: {
                name: "Green Grams",
                'short-desc': "High in protein, fiber, and essential micronutrients for health.",
                'health-benefits': [
                    "Improves digestion and prevents constipation.",
                    "Helps regulate blood sugar levels naturally."
                ]
            }
        },
        'mahua-flower': {
            img: mahuaFlower,
            description: {
                name: "Mahua Flower",
                'short-desc': "Used in traditional medicine for energy and wellness boost.",
                'health-benefits': [
                    "Boosts energy and helps combat fatigue.",
                    "Supports liver function and detoxification."
                ]
            }
        },
        'mahua-seeds': {
            img: mahuaSeeds,
            description: {
                name: "Mahua Seeds",
                'short-desc': "Source of oil, supports skin health and immunity strength.",
                'health-benefits': [
                    "Improves skin health with moisturizing properties.",
                    "Supports immune response with antimicrobial effects."
                ]
            }
        },
        'millets': {
            img: millets,
            description: {
                name: "Millets",
                'short-desc': "Gluten-free grains high in fiber, protein, and minerals.",
                'health-benefits': [
                    "Aids in weight management and digestion.",
                    "Reduces risk of type 2 diabetes and heart disease."
                ]
            }
        },
        'rice': {
            img: rice,
            description: {
                name: "Rice",
                'short-desc': "Staple grain providing energy and essential daily nutrients.",
                'health-benefits': [
                    "Provides quick energy with easily digestible carbohydrates.",
                    "Gluten-free and suitable for sensitive digestion."
                ]
            }
        },
        'sesame-seeds': {
            img: sesameSeeds,
            description: {
                name: "Sesame Seeds",
                'short-desc': "Tiny seeds packed with calcium, iron, and antioxidants.",
                'health-benefits': [
                    "Supports bone health due to high calcium content.",
                    "Lowers blood pressure and reduces inflammation."
                ]
            }
        },
        'dried-ragi': {
            img: driedRagi,
            description: {
                name: "Dried Ragi",
                'short-desc': "Calcium-rich millet that supports bones and boosts energy.",
                'health-benefits': [
                    "Strengthens bones with high natural calcium content.",
                    "Helps control blood sugar and aids weight management."
                ]
            }
        },
        'maize': { 
            img: maize, 
            description: { 
                name: "Maize", 
                'short-desc': "A versatile grain that provides energy and essential nutrients.",
                'health-benefits': [
                    "Rich in antioxidants, which support overall health.",
                    "Promotes digestive health with its high fiber content.",
                    "Boosts energy levels due to its natural carbohydrates."
                ] 
            } 
        },
        'black-gram': {
            img: blackGram, 
            description: {
                name: "Black Gram", 
                'short-desc': "Protein-packed legume that supports muscle growth and heart health.",
                'health-benefits': [
                    "Supports muscle growth with its high protein content.",
                    "Rich in iron, which aids in preventing anemia.",
                    "Helps regulate blood sugar levels and supports heart health."
                ] 
            }
        }
    }
    

    return (
        <>
            {Object.keys(products).map((product, idx) => {
                const value = products[product];
                return (
                    <div className='page' key={idx} id={product}>
                        <div className='content sm'style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '30px', height: '70%', backgroundImage: `url("${value.img}")`, opacity: '1', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                            <div className='content-desc' style={{}}>
                                <div className="bg-light"></div>
                                <h1 style={{margin: '0px', paddingInline: '20px'}}>{value.description.name}</h1>
                                <h3 style={{marginTop: '0px', fontSize: '18px', paddingInline: '20px'}}>{value.description['short-desc']}</h3>
                                <h3 style={{fontSize: '24px', margin: '0px', paddingInline: '20px'}}>Health Benefits</h3>
                                <ul style={{fontSize: '18px', margin: '0px'}}>
                                    {
                                        value.description['health-benefits'].map(hb => {
                                            return (
                                                <li key={hb}>{hb}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProductPage