<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <h1>Version actuelle 1.0</h1>
    <P-TabView>
      <P-TabPanel header="Version 1.0">

        <h4>Features</h4>
        <ul>
          <li style="color: darkgreen">Créer une recette</li>
          <li style="color: darkgreen">Modification d'une recette</li>
          <li style="color: darkgreen">Supprimer une recette</li>
          <li style="color: darkgreen">Créer un ingrédient</li>
          <li style="color: darkgreen">Supprimer un ingrédient</li>
          <li style="color: darkgreen">Modifier un ingrédient</li>
          <li style="color: darkgreen">Ajouter une recette au panier</li>
          <li style="color: darkgreen">Supprimer une recette au panier</li>
          <li style="color: darkgreen">Voir la liste des plats ajoutés au panier</li>
          <li style="color: darkgreen">Générer une liste de course</li>
          <li style="color: darkgreen">Voir la liste de course</li>
        </ul>

        <h4>Amélioration</h4>
        <ul>
          <li style="color: darkgreen">Amélioration l'aspect visuel de la création/modification d'une recette</li>
          <li style="color: darkgreen">Amélioration l'aspect visuel du panier et de la liste de course</li>
          <li style="color: darkgreen">Rajouter des messages success en cas d'ajout au panier
          </li>
          <li style="color: darkgreen">Remplacer le selecteur d'ingrédient par un autcomplete ou permettre de faire une
            recherche dans le select
            ans le formulaire de création/modification d'une recette
          </li>
        </ul>

        <h4>Bug à corriger</h4>
        <ul>
          <li style="color: darkgreen">Ajouter un bouton clear dans la liste de course ou reset dès qu'on regnère</li>
          <li style="color: darkgreen">Revoir le placement du bouton créer sur la liste d'ingrédient</li>
          <li style="color: darkgreen">Les ingredients se charge pas toujours chargé à la création/modification d'une
            recette
          </li>
          <li style="color: darkgreen">Les données d'une recette pas toujours chargé à la modification d'une recette
          </li>
          <li style="color: darkgreen">Pouvoir mettre des décimales dans le montant d'un ingrédient</li>
          <li style="color: darkgreen">Dans la liste de course, pour les ingrédients en unité simple, apparition d'un
            undefined au lieu de rien du tout -> "1 undefined Oignon"
          </li>
          <li style="color: darkgreen">Revoir le visuel des chips sur une carte recette quand il y a beaucoup
            d'ingrédient
          </li>
        </ul>
      </P-TabPanel>
      <P-TabPanel header="Version 1.1">
        <h4>Amélioration</h4>
        <ul>
          <li style="color: darkred">Faire un script pour faciliter le lancement de l'appli (j'en ai marre de faire des
            start:dev à la main)
          </li>
          <li style="color: darkred">Utiliser une autre techno de db ?</li>
          <li style="color: darkred">Menu Latéral ?</li>
        </ul>

        <h4>Bug à corriger</h4>
        <ul>
          <li style="color: darkred">Génération d'une liste de course. Dans le cas où on choisit deux unité différentes
            pour un même
            ingrédient,
            200ml + 300g = 500ml
          </li>
          <li style="color: darkred">Quand on ajoute un nouvel ingrédient à la liste, et si on modifie celui du dessous
            il ya un décalage
          </li>
          <li style="color: darkred">Quand on modifie un ingrédient déjà utilisé dans une recette, l'ingredient dans la
            recette n'est pas mise à jour
          </li>
        </ul>
      </P-TabPanel>
      <P-TabPanel header="Version 2.x">
        <h4>Features</h4>
        <ul>
          <li style="color: darkred">Ajouter les cuillière à café et à soupe dans les unités d'ingrédient</li>
          <li style="color: darkred">Trier les ingrédients de la liste par rayon de magasin</li>
          <li style="color: darkred">Possibilité de rechercher des ingrédients dans la liste des ingrédients</li>
          <li style="color: darkred">Possibilité de rechercher une recherche dans la liste de recette</li>
          <li style="color: darkred">Pagination dans la liste de recette</li>
          <li style="color: darkred">Pagination dans la liste d'ingrédients</li>
          <li style="color: darkred">Rajouter midi/soir sur une recette</li>
          <li style="color: darkred">Indiquer le nombre de personne sur la recette</li>
        </ul>
      </P-TabPanel>
      <P-TabPanel header="Version 3.x">
        <h4>Features</h4>
        <ul>
          <li style="color: darkred">Ajouter un calendrier</li>
          <li style="color: darkred">Ajouter la possibilité de lier des panier au calendrier</li>
          <li style="color: darkred">Ajouter calorie/protéine par recette</li>
          <li style="color: darkred">Créer une view pour une recette et pouvoir la passer en mode édition (plutôt que
            avoir une page modification directement)
          </li>
        </ul>
      </P-TabPanel>
    </P-TabView>
  </div>
</template>
