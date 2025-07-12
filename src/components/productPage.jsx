import greenGram from '../assets/bg-images/green-grams.jpg'
import brownNut from '../assets/bg-images/brown-nuts.webp'
import mahuaFlower from '../assets/bg-images/mahua-flowers.jpg'
import mahuaSeeds from '../assets/bg-images/mahua-seeds.png'
import millets from '../assets/bg-images/millets.jpg'
import rice from '../assets/bg-images/rice.jpg'
import sesameSeeds from '../assets/bg-images/sesame-seeds.jpg'
import driedRagi from '../assets/bg-images/dried-ragi.jpg'

const ProductPage = () => {
    const products = {
        'ground-nuts': {
            img: brownNut,
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
        }
    }


    return (
        <>
            {Object.keys(products).map((product, idx) => {
                const value = products[product];
                return (
                    <div className='page' key={idx} id={product}>
                        <div className='content'style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', height: '70%'}}>
                            <div className='content-img'>
                                <img src={value.img} alt="" style={{width: '300px', height: '200px'}} />
                            </div>
                            <div className='content-desc'>
                                <h1 style={{margin: '0px'}}>{value.description.name}</h1>
                                <h3 style={{marginTop: '0px', fontSize: '18px'}}>{value.description['short-desc']}</h3>
                                <h3 style={{fontSize: '24px'}}>Health Benefits</h3>
                                <ul style={{fontSize: '18px'}}>
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