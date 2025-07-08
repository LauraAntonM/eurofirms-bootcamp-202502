import { connect, disconnect } from '../data/index.js'
import { createClothe } from './createClothe.js'

const clothes = [
    {
        image: 'https://www.zara.com/es/es/camiseta-asimetrica-drapeada-p01198180.html?v1=438594615&v2=2580457',
        description: 'camiseta beige asimetrica, mangas desiguales cuello con caida lateral, laterales frunces',
        size: "S",
        category: "CAMISAS/CAMISETAS",
        title: "CAMISETA ASIMETRICA"
    },

    {
        image: 'https://static.zara.net/assets/public/7510/ed07/7ed1442a8f6e/cbab1c9266a4/03253375251-a1/03253375251-a1.jpg?ts=1745426168893&w=215',
        description: 'camiseta logo smile, frase, manga corta, color blanco con bordes en cuello y mangas negro',
        size: 'S',
        category: 'CAMISAS/CAMISETAS',
        title: 'CAMISETA SMILE'
    },

    {
        image: 'https://static.zara.net/assets/public/9380/d88b/347a43a79379/ecdb8d2c9f3e/00347359620-a1/00347359620-a1.jpg?ts=1746457681593&w=215',
        description: 'camiseta top rosa, bordado Hello Kitty,  ',
        size: 'S',
        category: 'CAMISAS/CAMISETAS',
        title: 'CAMISETA CORTA HELLO KITTY'
    },

    {
        image: 'https://static.zara.net/assets/public/d238/978c/4b7d4dd486ea/1bf6378ba434/01165197620-p/01165197620-p.jpg?ts=1743689619828&w=563',
        description: 'camiseta manga corta, rosa, broche dorado',
        size: 'S',
        category: 'CAMISAS/CAMISETAS',
        title: 'CAMISETA BROCHE'
    },

    {
        image: 'https://static.zara.net/assets/public/4ef5/b7c4/33994c1f8b9a/eb0db504a32f/02298162620-p/02298162620-p.jpg?ts=1720017968439&w=215',
        description: 'camisa rosa, oversize, manga larga',
        size: 'S',
        category: 'CAMISAS/CAMISETAS',
        title: 'CAMISA MANGA LARGA'
    },

    {
        image: 'https://static.zara.net/assets/public/2f1a/19b6/abe14ea28885/b1dabe78c10f/03081842712-a2/03081842712-a2.jpg?ts=1743699701266&w=215',
        description: 'blusa con encaje en cuello y pecho, color blanco, manga larga con volumen en media manga inferior',
        size: 'S',
        category: 'CAMISAS/CAMISETAS',
        title: 'CAMISA ROMANTICA'
    },

    {
        image: 'https://static.zara.net/assets/public/69d8/5617/2e3642d0bf9c/f03765e5b617/00085339250-a2/00085339250-a2.jpg?ts=1746025045362&w=215',
        description: 'top espalda descubierta, atado a cuello con cierre frontal',
        size: 'S',
        category: 'TOP/BODY',
        title: 'TOP ESPALDA DESCUBIERTA'
    },

    {
        image: 'https://static.zara.net/assets/public/4185/2d8e/ef074154a131/43fc9f24c249/05039005800-p/05039005800-p.jpg?ts=1739443137260&w=215',
        description: 'body negro elastico asimetrico',
        size: 'S',
        category: 'TOP/BODY',
        title: 'BODY ASIMETRICO'
    },

    {
        image: 'https://static.zara.net/assets/public/32c2/263a/845b4c198a1b/24978d733883/04737003622-a1/04737003622-a1.jpg?ts=1744371146670&w=215',
        description: 'top sin mangas lentejuelas, color rosa',
        size: 'S',
        category: 'TOP/BODY',
        title: 'TOP LENTEJUELAS'
    },

    {
        image: 'https://static.zara.net/assets/public/ddc8/ea6f/389041da9c4a/a3fee1c5af42/03641342806-p/03641342806-p.jpg?ts=1743506781149&w=215',
        description: 'top beige, tirante ancho',
        size: 'S',
        category: 'TOP/BODY',
        title: 'TOP TIRANTE ANCHO'
    },

    {
        image: 'https://static.zara.net/assets/public/b362/0f66/7c704f429780/53a4b1c9933a/03644306712-a2/03644306712-a2.jpg?ts=1740746612560&w=215',
        description: 'body manga larga color hueso ',
        size: 'S',
        category: 'TOP/BODY',
        title: 'BODY MANGA LARGA'
    },

    {
        image: 'https://static.zara.net/assets/public/13d4/2bb7/69634ca4a01f/f6c7ee788daa/04813315717-a2/04813315717-a2.jpg?ts=1739275230952&w=215',
        description: 'top encaje sin mangas color negro',
        size: 'S',
        category: 'TOP/BODY',
        title: 'TOP ENCAJE'
    },


    {
        image: 'https://static.zara.net/assets/public/aa57/c970/e37e40c4802b/b00dd36037a8/04813349942-a2/04813349942-a2.jpg?ts=1746781027081&w=215',
        description: 'vestido skater, color crema, joya',
        size: 'S',
        category: 'VESTIDOS',
        title: 'VESTIDO JOYA'
    },

    {
        image: 'https://static.zara.net/assets/public/4ca8/e4f2/15e54bc9af1d/5049594c3939/03128324620-a1/03128324620-a1.jpg?ts=1744794753345&w=215',
        description: ' Vestido rosa sin mangas',
        size: 'S',
        category: 'VESTIDOS',
        title: 'VESTIDO'
    },

    {
        image: 'https://static.zara.net/assets/public/cb29/177d/2d4142ed85c6/fb8d3b418ddd/03641313800-p/03641313800-p.jpg?ts=1741192344010&w=215',
        description: 'vestido asimetrico negro sin mangas',
        size: 'S',
        category: 'VESTIDOS',
        title: 'VESTIDO ASIMETRICO'
    },

    {
        image: 'https://static.zara.net/assets/public/bd9c/93c6/60a84e0eb783/7b74e4e79d79/05584363622-a1/05584363622-a1.jpg?ts=1744359564834&w=215',
        description: 'vestido largo drapeado ajustado',
        size: 'S',
        category: 'VESTIDOS',
        title: 'VESTIDO AJUSTADO'
    },

    {
        image: 'https://static.zara.net/assets/public/c798/5e56/be9d47029124/fe6a645e79bf/02121023811-a1/02121023811-a1.jpg?ts=1737565218241&w=215',
        description: 'vestido gris manga corta',
        size: 'S',
        category: 'VESTIDOS',
        title: 'VESTIDO MANGA CORTA'
    },

]


connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {


        try {
            return Promise.all(
                clothes.map(clothe => createClothe('686d3429ccb2be6f5d06f63c', clothe.image, clothe.description, clothe.size, clothe.category, clothe.title)
                    .then(() => console.log('Clothe created'))
                    .catch(error => console.error(error)))
            )
        }

        catch (error) {
            console.error(error)
        }
    }

    )
    .catch(error => console.error(error))
    .finally(() => disconnect())


