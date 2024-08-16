<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <h1>Version actuelle 0.0.0</h1>
    <TabView>
      <TabPanel header="Version 1.x.x">
        <h4>Features</h4>
        <ul>
          <li style="color: darkgreen">Créer une recette</li>
          <li style="color: darkgreen">Modification d'une recette</li>
          <li style="color: darkred">Supprimer une recette</li>
          <li style="color: darkgreen">Créer un ingrédient</li>
          <li style="color: darkgreen">Supprimer un ingrédient</li>
          <li style="color: darkred">Modifier un ingrédient</li>
          <li style="color: darkgreen">Ajouter une recette au panier</li>
          <li style="color: darkgreen">Voir la liste des plats ajoutés au panier</li>
          <li style="color: darkgreen">Générer une liste de course</li>
          <li style="color: darkgreen">Voir la liste de course</li>
        </ul>

        <h4>Amélioration</h4>
        <ul>
          <li style="color: darkred">Amélioration l'aspect visuel de la création/modification d'une recette</li>
          <li style="color: darkred">Amélioration l'aspect visuel du panier et de la liste de course</li>
          <li style="color: darkred">Rajouter des messages success en cas d'ajout au panier et de génération de liste
            réussi
          </li>
          <li style="color: darkred">Remplacer le selecteur d'ingrédient par un autcomplete ou permettre de faire une
            recherche dans le select
            ans le formulaire de création/modification d'une recette
          </li>
        </ul>

        <h4>Bug à corriger</h4>
        <ul>
          <li style="color: darkred">Génération d'une liste de course. Dans le cas où on choisit deux unité différentes
            pour un même
            ingrédient,
            200ml + 300g = 500ml
          </li>
          <li style="color: darkred">Revoir le placement du bouton créer sur la liste d'ingrédient</li>
          <li style="color: darkred">Les ingredients se charge pas toujours à la création/modification d'une recette
          </li>
          <li style="color: darkred">Les données d'une recette pas toujours à la modification d'une recette</li>
          <li style="color: darkred">Pouvoir mettre des décimales dans le montant d'un ingrédient</li>
          <li style="color: darkred">Revoir le visuel des chips sur une carte recette quand il y a beaucoup
            d'ingrédient
          </li>
        </ul>
      </TabPanel>
      <TabPanel header="Version 2.x.x">
        <h4>Features</h4>
        <ul>
          <li style="color: darkred">Ajouter les cuillière à café et à soupe dans les unités d'ingrédient</li>
          <li style="color: darkred">Trier les ingrédients de la liste par rayon de magasin</li>
          <li style="color: darkred">Possibilité de rechercher des ingrédients dans la liste des ingrédients</li>
          <li style="color: darkred">Possibilité de rechercher une recherche dans la liste de recette</li>
          <li style="color: darkred">Pagination dans la liste de recette</li>
          <li style="color: darkred">Pagination dans la liste d'ingrédients</li>
        </ul>
      </TabPanel>
      <TabPanel header="Version 3.x.x">
        <h4>Features</h4>
        <ul>
          <li style="color: darkred">Ajouter un calendrier</li>
          <li style="color: darkred">Ajouter la possibilité de lier des panier au calendrier</li>
          <li style="color: darkred">Ajouter calorie/protéine par recette</li>
          <li style="color: darkred">Créer un executable</li>
          <li style="color: darkred">Créer une view pour une recette et pouvoir la passer en mode édition (plutôt que
            avoir une page modification directement)
          </li>
        </ul>
      </TabPanel>
    </TabView>
  </div>
</template>
