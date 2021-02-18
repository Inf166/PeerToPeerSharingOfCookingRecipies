export default {
    // computed -> this.$store.getters.allRecipies || import { mapGetters } from 'vuex' - computed -> ...mapGetters({all: 'allRecipies', new: 'newRecipies'})
    myUser(state) {
        return state.myUser;
    },
    myUserName(state) {
        return state.myUserName;
    },
    myUid(state) {
        return state.myUid;
    },
    myEmail(state) {
        return state.myEmail;
    },
    myPeer(state) {
        return state.myPeer;
    },
    myPeerId(state) {
        return state.myPeerId;
    },
    myConnection(state) {
        return state.myConnection;
    },
    receiverID(state) {
        return state.receiverID;
    },
    isOnline(state) {
        return state.isOnline;
    },
    myDatabase(state) {
        return state.myDatabase;
    },
    users(state) {
        return state.users;
    },
    myKey(state) {
        return state.myKey;
    },
    myFriends(state) {
        return state.myFriends;
    },
    searchOutput(state) {
        return state.searchOutput;
    },
    myPreferencesDifficultyLevel(state) {
        return state.myPreferencesDifficultyLevel;
    },
    myPreferencesCategories(state) {
        return state.myPreferencesCategories;
    },
    myPreferencesIngredients(state) {
        return state.myPreferencesIngredients;
    },
    myRecipies(state) {
        return state.myRecipies;
    },
    newRecipies(state) {
        return state.myRecipies.filter(recipe => {
            return recipe.isNew;
        });
    },
    tempRecipe(state) {
        return state.tempRecipe;
    },
    friendRecipies(state) {
        return state.friendRecipies;
    },
    prefrencedRecipies(state) {
        var myPrefsDiff = state.myPreferencesDifficultyLevel;
        var myPrefCates = state.myPreferencesCategories;
        var myPrefIngrs = state.myPreferencesIngredients;
        var unCheckedRecipies = state.friendRecipies;
        const maxDiff = myPrefsDiff.reduce(function(prev, current) {
            return (prev.value > current.value) ? prev : current
        });
        const maxCates = myPrefCates.reduce(function(prev, current) {
            return (prev.value > current.value) ? prev : current
        });
        const maxIngrs = myPrefIngrs.reduce(function(prev, current) {
            return (prev.value > current.value) ? prev : current
        });
        console.log("🔥 Most liked Difficulty Level: ", maxDiff);
        console.log("🔥 Most liked Category: ",maxCates);
        console.log("🔥 Most liked Ingredient: ",maxIngrs);
        var unCheckedKeys = Object.keys(unCheckedRecipies);
        var unCheckedLength = unCheckedKeys.length;
        var suggestedRecipies = [];
        var hasCat, hasDiff, hasIngr = false;
        for (let index = 0; index < unCheckedLength; index++) {
            for (var prop in unCheckedRecipies[index]) {
                if(prop == "categories") {
                    console.log("✅ Am in Categories...");
                    var categories = unCheckedRecipies[index][prop];
                    categories.forEach((category) => {
                        if(category.name == maxCates.name) {
                            console.log(`💭 Are those Equal Categories? ${maxCates.name}:${category.name}`);
                            hasCat = true;
                        }
                    });
                }
                if(prop == "ingredients") {
                    console.log("✅ Am in ingredients...");
                    var ingredients = unCheckedRecipies[index][prop];
                    ingredients.forEach((ingredient) => {
                        if(ingredient.name == maxIngrs.name) {
                            console.log(`💭 Are those Equal Ingredients? ${maxIngrs.name}:${ingredient.name}`);
                            hasIngr = true
                        }
                    });
                }
                if(prop == "difficultyLevel") {
                    console.log("✅ Am in DifficultyLevel...");
                    if(unCheckedRecipies[index][prop]==maxDiff.name) {
                        console.log(`💭 Are those Equal Difficulty Levels? ${maxDiff.name}:${unCheckedRecipies[index][prop]}`);
                        hasDiff = true;
                    }
                }
            }
            if(hasCat && hasDiff && hasIngr) {
                suggestedRecipies.push(unCheckedRecipies[index]);
                hasCat, hasDiff, hasIngr = false;
            }
        }
        console.log(suggestedRecipies);
        return suggestedRecipies;
    },
}