import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
// import createPersistedState from "vuex-persistedstate";
// import createCache from 'vuex-cache';
// import createMutationsSharer from "vuex-shared-mutations";

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// const vuexLocal = new VuexPersistence({
//     supportCircular: true,
//     storage: window.localStorage
//   });

export const store = new Vuex.Store({
    plugins: [
        // vuexLocal.plugin
        // createPersistedState,
        // createCache(),
        // createMutationsSharer({ predicate: ["mutation1", "mutation2"] })
    ],
    state: {
        myUser: null,
        myUserName: '',
        myUid: '',
        myEmail: '',

        myPeer: null,
        myPeerId: '',
        myConnection: null,
        receiverID: null,
        isOnline: false,

        myDatabase: null,
        users: null,
        myKey:'',
        myFriends: null,

        searchOutput: [],

        myRecipies: [
            {
              "@type": "Recipe",
              "id": "TestRezept1",
              "title": "Sparghetti Carbonara",
              "description": "Ein leckeres Nudelgericht",
              "datePublished": "2021-2-17 18:41:27",
              "isNew": false,
              "categories": [
                { "name": "Hauptspeise" },
                { "name": "Nudelgericht" },
                { "name": "Italienisch" }
              ],
              "author": { "name": "Melanie Müllerchen" },
              "portion": "2",
              "difficultyLevel": "mittel",
              "householdUtensils": [
                  { "name": "Pfanne" }, 
                  { "name": "Topf" }
              ],
              "ingredients": [
                {
                  "name": "Spaghetti",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Speck",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [{ "name": "Metzger" }],
                  "alternativeIngredients": [
                    { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                  ]
                },
                {
                  "name": "Eier",
                  "amount": "3",
                  "unit": "stk",
                  "origins": [{ "name": "Überall" }],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                }
              ],
              "prepTime": "2",
              "restTime": "1",
              "cookTime": "15",
              "recipeInstructions": [
                {
                  "step": 1,
                  "description": "Spaghetti in gesalzenem Wasser für 8 min kochen. Dann abgießen und in die Pfanne geben ",
                  "tipsAndTricks": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ],
                  "historicalNote": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ]
                },
                {
                  "step": 2,
                  "description": "Eier aufschlagen und zu den Spaghetti in die Pfanne geben",
                  "tipsAndTricks": [
                    { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                  ],
                  "historicalNote": [
                    {
                      "author": "",
                      "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                    }
                  ]
                },
                {
                  "step": 3,
                  "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                  "tipsAndTricks": [{ "author": "", "text": "" }],
                  "historicalNote": [{ "author": "", "text": "" }]
                }
              ]
            },  
            {
              "@type": "Recipe",
              "id": "TestRezept2",
              "title": "Sparghetti Rabiata",
              "description": "Ein leckeres Nudelgericht",
              "datePublished": "2021-2-17 18:41:27",
              "isNew": false,
              "categories": [
                { "name": "Hauptspeise" },
                { "name": "Nudelgericht" },
                { "name": "Italienisch" }
              ],
              "author": { "name": "Melanie Müllerchen" },
              "portion": "2",
              "difficultyLevel": "mittel",
              "householdUtensils": [
                  { "name": "Pfanne" }, 
                  { "name": "Topf" }
              ],
              "ingredients": [
                {
                  "name": "Spaghetti",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Speck",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [{ "name": "Metzger" }],
                  "alternativeIngredients": [
                    { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                  ]
                },
                {
                  "name": "Eier",
                  "amount": "3",
                  "unit": "stk",
                  "origins": [{ "name": "Überall" }],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                }
              ],
              "prepTime": "2",
              "restTime": "1",
              "cookTime": "15",
              "recipeInstructions": [
                {
                  "step": 1,
                  "description": "Spaghetti in gesalzenem Wasser für 8 min kochen. Dann abgießen und in die Pfanne geben ",
                  "tipsAndTricks": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ],
                  "historicalNote": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ]
                },
                {
                  "step": 2,
                  "description": "Eier aufschlagen und zu den Spaghetti in die Pfanne geben",
                  "tipsAndTricks": [
                    { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                  ],
                  "historicalNote": [
                    {
                      "author": "",
                      "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                    }
                  ]
                },
                {
                  "step": 3,
                  "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                  "tipsAndTricks": [{ "author": "", "text": "" }],
                  "historicalNote": [{ "author": "", "text": "" }]
                }
              ]
            },
            {
              "@type": "Recipe",
              "id": "TestRezept3",
              "title": "Sparghetti und Pesto",
              "description": "Ein leckeres Nudelgericht",
              "datePublished": "2021-2-17 18:41:27",
              "isNew": false,
              "categories": [
                { "name": "Hauptspeise" },
                { "name": "Nudelgericht" },
                { "name": "Italienisch" }
              ],
              "author": { "name": "Melanie Müllerchen" },
              "portion": "2",
              "difficultyLevel": "mittel",
              "householdUtensils": [
                  { "name": "Pfanne" }, 
                  { "name": "Topf" }
              ],
              "ingredients": [
                {
                  "name": "Spaghetti",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Speck",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [{ "name": "Metzger" }],
                  "alternativeIngredients": [
                    { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                  ]
                },
                {
                  "name": "Eier",
                  "amount": "3",
                  "unit": "stk",
                  "origins": [{ "name": "Überall" }],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                }
              ],
              "prepTime": "2",
              "restTime": "1",
              "cookTime": "15",
              "recipeInstructions": [
                {
                  "step": 1,
                  "description": "Spaghetti in gesalzenem Wasser für 8 min kochen. Dann abgießen und in die Pfanne geben ",
                  "tipsAndTricks": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ],
                  "historicalNote": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ]
                },
                {
                  "step": 2,
                  "description": "Eier aufschlagen und zu den Spaghetti in die Pfanne geben",
                  "tipsAndTricks": [
                    { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                  ],
                  "historicalNote": [
                    {
                      "author": "",
                      "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                    }
                  ]
                },
                {
                  "step": 3,
                  "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                  "tipsAndTricks": [{ "author": "", "text": "" }],
                  "historicalNote": [{ "author": "", "text": "" }]
                }
              ]
            },
            {
              "@type": "Recipe",
              "id": "TestRezept4",
              "title": "Pizza Margaritha",
              "description": "Ein leckeres Pizzagericht",
              "datePublished": "2021-2-17 18:41:27",
              "isNew": false,
              "categories": [
                { "name": "Hauptspeise" },
                { "name": "Pizza" },
                { "name": "Italienisch" }
              ],
              "author": { "name": "Melanie Müllerchen" },
              "portion": "2",
              "difficultyLevel": "mittel",
              "householdUtensils": [
                  { "name": "Pfanne" }, 
                  { "name": "Topf" }
              ],
              "ingredients": [
                {
                  "name": "Spaghetti",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Speck",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [{ "name": "Metzger" }],
                  "alternativeIngredients": [
                    { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                  ]
                },
                {
                  "name": "Eier",
                  "amount": "3",
                  "unit": "stk",
                  "origins": [{ "name": "Überall" }],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                }
              ],
              "prepTime": "2",
              "restTime": "1",
              "cookTime": "15",
              "recipeInstructions": [
                {
                  "step": 1,
                  "description": "Spaghetti in gesalzenem Wasser für 8 min kochen. Dann abgießen und in die Pfanne geben ",
                  "tipsAndTricks": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ],
                  "historicalNote": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ]
                },
                {
                  "step": 2,
                  "description": "Eier aufschlagen und zu den Spaghetti in die Pfanne geben",
                  "tipsAndTricks": [
                    { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                  ],
                  "historicalNote": [
                    {
                      "author": "",
                      "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                    }
                  ]
                },
                {
                  "step": 3,
                  "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                  "tipsAndTricks": [{ "author": "", "text": "" }],
                  "historicalNote": [{ "author": "", "text": "" }]
                }
              ]
            },
            {
              "@type": "Recipe",
              "id": "TestRezept5",
              "title": "Pizza Carbonara",
              "description": "Ein leckeres Nudelgericht",
              "datePublished": "2021-2-17 18:41:27",
              "isNew": false,
              "categories": [
                { "name": "Hauptspeise" },
                { "name": "Pizza" },
                { "name": "Italienisch" }
              ],
              "author": { "name": "Melanie Müllerchen" },
              "portion": "2",
              "difficultyLevel": "mittel",
              "householdUtensils": [
                  { "name": "Pfanne" }, 
                  { "name": "Topf" }
              ],
              "ingredients": [
                {
                  "name": "Spaghetti",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Speck",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [{ "name": "Metzger" }],
                  "alternativeIngredients": [
                    { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                  ]
                },
                {
                  "name": "Eier",
                  "amount": "3",
                  "unit": "stk",
                  "origins": [{ "name": "Überall" }],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                }
              ],
              "prepTime": "2",
              "restTime": "1",
              "cookTime": "15",
              "recipeInstructions": [
                {
                  "step": 1,
                  "description": "Spaghetti in gesalzenem Wasser für 8 min kochen. Dann abgießen und in die Pfanne geben ",
                  "tipsAndTricks": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ],
                  "historicalNote": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ]
                },
                {
                  "step": 2,
                  "description": "Eier aufschlagen und zu den Spaghetti in die Pfanne geben",
                  "tipsAndTricks": [
                    { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                  ],
                  "historicalNote": [
                    {
                      "author": "",
                      "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                    }
                  ]
                },
                {
                  "step": 3,
                  "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                  "tipsAndTricks": [{ "author": "", "text": "" }],
                  "historicalNote": [{ "author": "", "text": "" }]
                }
              ]
            },
            {
              "@type": "Recipe",
              "id": "TestRezept6",
              "title": "Noccis und Schweinemedalions",
              "description": "Ein leckeres Schweinegericht",
              "datePublished": "2021-2-17 18:41:27",
              "isNew": false,
              "categories": [
                { "name": "Hauptspeise" },
                { "name": "Landküche" },
                { "name": "Polnisch" }
              ],
              "author": { "name": "Melanie Müllerchen" },
              "portion": "2",
              "difficultyLevel": "mittel",
              "householdUtensils": [
                  { "name": "Pfanne" }, 
                  { "name": "Topf" }
              ],
              "ingredients": [
                {
                  "name": "Spaghetti",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Speck",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [{ "name": "Metzger" }],
                  "alternativeIngredients": [
                    { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                  ]
                },
                {
                  "name": "Eier",
                  "amount": "3",
                  "unit": "stk",
                  "origins": [{ "name": "Überall" }],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                }
              ],
              "prepTime": "2",
              "restTime": "1",
              "cookTime": "15",
              "recipeInstructions": [
                {
                  "step": 1,
                  "description": "Spaghetti in gesalzenem Wasser für 8 min kochen. Dann abgießen und in die Pfanne geben ",
                  "tipsAndTricks": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ],
                  "historicalNote": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ]
                },
                {
                  "step": 2,
                  "description": "Eier aufschlagen und zu den Spaghetti in die Pfanne geben",
                  "tipsAndTricks": [
                    { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                  ],
                  "historicalNote": [
                    {
                      "author": "",
                      "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                    }
                  ]
                },
                {
                  "step": 3,
                  "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                  "tipsAndTricks": [{ "author": "", "text": "" }],
                  "historicalNote": [{ "author": "", "text": "" }]
                }
              ]
            },
            {
              "@type": "Recipe",
              "id": "TestRezept7",
              "title": "Piroggee",
              "description": "Ein leckeres Piroggee Gericht auf Polnischer Art",
              "datePublished": "2021-2-17 18:41:27",
              "isNew": false,
              "categories": [
                { "name": "Hauptspeise" },
                { "name": "Piroggee" },
                { "name": "Polnisch" }
              ],
              "author": { "name": "Melanie Müllerchen" },
              "portion": "2",
              "difficultyLevel": "mittel",
              "householdUtensils": [
                  { "name": "Pfanne" }, 
                  { "name": "Topf" }
              ],
              "ingredients": [
                {
                  "name": "Spaghetti",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Speck",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [{ "name": "Metzger" }],
                  "alternativeIngredients": [
                    { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                  ]
                },
                {
                  "name": "Eier",
                  "amount": "3",
                  "unit": "stk",
                  "origins": [{ "name": "Überall" }],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                }
              ],
              "prepTime": "2",
              "restTime": "1",
              "cookTime": "15",
              "recipeInstructions": [
                {
                  "step": 1,
                  "description": "Spaghetti in gesalzenem Wasser für 8 min kochen. Dann abgießen und in die Pfanne geben ",
                  "tipsAndTricks": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ],
                  "historicalNote": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ]
                },
                {
                  "step": 2,
                  "description": "Eier aufschlagen und zu den Spaghetti in die Pfanne geben",
                  "tipsAndTricks": [
                    { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                  ],
                  "historicalNote": [
                    {
                      "author": "",
                      "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                    }
                  ]
                },
                {
                  "step": 3,
                  "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                  "tipsAndTricks": [{ "author": "", "text": "" }],
                  "historicalNote": [{ "author": "", "text": "" }]
                }
              ]
            },
            {
              "@type": "Recipe",
              "id": "TestRezept8",
              "title": "Sparghetti Carbonara von Oma",
              "description": "Ein leckeres Nudelgericht",
              "datePublished": "2021-2-17 18:41:27",
              "isNew": false,
              "categories": [
                { "name": "Hauptspeise" },
                { "name": "Nudelgericht" },
                { "name": "Italienisch" }
              ],
              "author": { "name": "Melanie Müllerchen" },
              "portion": "2",
              "difficultyLevel": "mittel",
              "householdUtensils": [
                  { "name": "Pfanne" }, 
                  { "name": "Topf" }
              ],
              "ingredients": [
                {
                  "name": "Spaghetti",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Speck",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [{ "name": "Metzger" }],
                  "alternativeIngredients": [
                    { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                  ]
                },
                {
                  "name": "Eier",
                  "amount": "3",
                  "unit": "stk",
                  "origins": [{ "name": "Überall" }],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                }
              ],
              "prepTime": "2",
              "restTime": "1",
              "cookTime": "15",
              "recipeInstructions": [
                {
                  "step": 1,
                  "description": "Spaghetti in gesalzenem Wasser für 8 min kochen. Dann abgießen und in die Pfanne geben ",
                  "tipsAndTricks": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ],
                  "historicalNote": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ]
                },
                {
                  "step": 2,
                  "description": "Eier aufschlagen und zu den Spaghetti in die Pfanne geben",
                  "tipsAndTricks": [
                    { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                  ],
                  "historicalNote": [
                    {
                      "author": "",
                      "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                    }
                  ]
                },
                {
                  "step": 3,
                  "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                  "tipsAndTricks": [{ "author": "", "text": "" }],
                  "historicalNote": [{ "author": "", "text": "" }]
                }
              ]
            },
            {
              "@type": "Recipe",
              "id": "TestRezept9",
              "title": "Omlett",
              "description": "Ein leckeres Eigericht",
              "datePublished": "2021-2-17 18:41:27",
              "isNew": false,
              "categories": [
                { "name": "Frühstück" },
                { "name": "Vorspeise" },
                { "name": "Landküche" }
              ],
              "author": { "name": "Melanie Müllerchen" },
              "portion": "2",
              "difficultyLevel": "mittel",
              "householdUtensils": [
                  { "name": "Pfanne" }, 
                  { "name": "Topf" }
              ],
              "ingredients": [
                {
                  "name": "Spaghetti",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [
                    { "name": "Rewe" },
                    { "name": "Lidl" },
                    { "name": "Aldi" },
                    { "name": "Hit" }
                  ],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                },
                {
                  "name": "Speck",
                  "amount": "1",
                  "unit": "pck",
                  "origins": [{ "name": "Metzger" }],
                  "alternativeIngredients": [
                    { "name": "Aubergine", "amount": "50", "unit": "g", "origin": "" }
                  ]
                },
                {
                  "name": "Eier",
                  "amount": "3",
                  "unit": "stk",
                  "origins": [{ "name": "Überall" }],
                  "alternativeIngredients": [
                    { "name": "", "amount": "", "unit": "", "origin": "" }
                  ]
                }
              ],
              "prepTime": "2",
              "restTime": "1",
              "cookTime": "15",
              "recipeInstructions": [
                {
                  "step": 1,
                  "description": "Spaghetti in gesalzenem Wasser für 8 min kochen. Dann abgießen und in die Pfanne geben ",
                  "tipsAndTricks": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ],
                  "historicalNote": [
                      { 
                          "author": "", 
                          "text": "" 
                      }
                  ]
                },
                {
                  "step": 2,
                  "description": "Eier aufschlagen und zu den Spaghetti in die Pfanne geben",
                  "tipsAndTricks": [
                    { "author": "Melanie Müllerchen", "text": "Eier sollten aus Bodenhaltung sein." }
                  ],
                  "historicalNote": [
                    {
                      "author": "",
                      "text": "Eier besser an der Pfanne aufschlagen und nich am Kopf des Bruders..."
                    }
                  ]
                },
                {
                  "step": 3,
                  "description": "Speck dazu geben und mindestens solange anbraten bis die Eier sämig werden.",
                  "tipsAndTricks": [{ "author": "", "text": "" }],
                  "historicalNote": [{ "author": "", "text": "" }]
                }
              ]
            }
          ],
        friendRecipies: [],
        myPreferencesCategories: [
            {name: 'test', value: '100'}
        ],
        myPreferencesIngredients: [
            {name: 'test', value: '100'}
        ],
        myPreferencesDifficultyLevel: [
            {name: 'test', value: '100'}
        ],
        tempRecipe: {}
    },
    getters,
    mutations,
    actions,
});