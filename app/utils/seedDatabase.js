const Tree = require("../models/tree.model");
const PromoCode = require("../models/promoCodes.model");

const seed = {
    promoCodes: () => {
        for(let i = 0; i < 50; i++) {
            let promoCodeID = makeID(20);

            const promoCode = new PromoCode({
                promoCodeString: promoCodeID.toString()
            });

            promoCode.save()
                .then(() => {
                    console.log("PromoCode: " + promoCodeID + " Created");

                    if(i == 49){
                        console.log("Finished Creation");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    trees: () => {
        let treeNameArray = [
            "Oak Tree",
            "Spruce Tree",
            "Birch Tree",
            "Jungle Tree",
            "Acacia Tree",
            "Dark Oak Tree",
            "Chorus Fruit Tree"
        ];
        
        let descriptionArray = [
            "Oak trees are unique in that they have the smallest space requirements, and along with dark oak trees can drop an apple when their leaf block is destroyed.",
            "Spruce trees, also known as pine trees, grow from spruce saplings and have growth patterns and requirements very similar to birch trees, though they look very different. They are mainly found in the taiga biome, but they may also generate in wooded mountains, snowy tundra, snowy taiga, and giant tree taiga biomes.",
            "Birch trees differ from their woody cousins like oak and pine by only coming in one shape. While oak trees occasionally sprout branches and grow to huge sizes, birch tends to grow to a more predictable size, just five to seven blocks tall. This makes it especially suitable for indoor gardens. Each tree has fifty to sixty leaf blocks that you'll need shears to collect if, for some reason, you want to collect a lot of leaves.",
            "Jungle trees are exclusive to the jungle biome. Jungle tree leaves drop jungle tree saplings, which appear tall and skinny like the jungle tree itself.",
            "Acacia trees are only found in the savanna biome. Acacia trees are around 8 blocks tall and feature unique diagonal trunks, and may occasionally have multiple canopies.",
            "Dark oak trees are found only in the dark forest biome. They have thick, 2×2 trunks, and will generate dirt blocks under their trunk if generated on a steep cliff. Dark oak trees nearly always generate with irregular logs connected to the trunk - these represent large branches.",
            "While only loosely defined as a tree, these are structures generated on the outermost End islands. Instead of logs and leaves, they are instead comprised of chorus plant trunk blocks and flowers on the tip. They do not drop their own block but instead chorus fruit."
        ];
        
        let imageArray = [
            "https://gamepedia.cursecdn.com/minecraft_gamepedia/d/d6/Oak_Trees.png",
            "https://gamepedia.cursecdn.com/minecraft_gamepedia/7/72/Spruce_Trees.png",
            "https://gamepedia.cursecdn.com/minecraft_gamepedia/f/f7/Birch_tree.png",
            "https://gamepedia.cursecdn.com/minecraft_gamepedia/d/d9/Jungle_Trees.png",
            "https://gamepedia.cursecdn.com/minecraft_gamepedia/9/97/Acacia_Trees.png",
            "https://gamepedia.cursecdn.com/minecraft_gamepedia/b/b6/Dark_Oak_Tree2.png",
            "https://gamepedia.cursecdn.com/minecraft_gamepedia/e/e5/ChorusPlants.png"
        ];
        
        for(let i=0; i < 50; i++){
            let randomPick = Math.floor((Math.random() * 7));
    
            const tree = new Tree({
                name: treeNameArray[randomPick],
                maxHeight: Math.floor((Math.random() * 30) + 15),
                averageHeight: Math.floor((Math.random() * 15) + 7),
                description: descriptionArray[randomPick],
                price: Math.floor((Math.random() * 1000000) + 1),
                image: imageArray[randomPick]
            });
            
            tree.save()
                .then(() => {
                    console.log("Tree created");

                    if(i == 50){
                        console.log("Finished Creation");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
};

function makeID(length){
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for(let i = 0; i < length + 1; i++){
        if(i % 3 == 0 && i != 0){
            result += "-";
        }
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

module.exports = seed;