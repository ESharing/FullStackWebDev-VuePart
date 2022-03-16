<!--
<template>
  <v-layout row warp>
    <v-flex xs4>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Batman vs Superman</div>
          <span class="grey--text">2016 . Science fiction film/Action fiction . 3h 3m</span>
        </div>
      </v-card-title>
      <v-card-text>
        It's been nearly two years since Superman's (Henry Cavill)
colossal battle with Zod (Michael Shannon) devastated the city of
Metropolis. The loss of life and collateral damage left many feeling angry
and helpless, including crime-fighting billionaire Buucde Wayne (Ben Afflech).
Convinced that Superman is now a threat to humanity, Batman embarks on a
personal vendetta to end his reign on Earth, while the conniving Lex Luythor
(Jesse Eisenberg) lauches his own crusade against the Man of Steal.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="purle">Rate this movie</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    </v-flex>
    <v-flex xs4>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Logan</div>
          <span class="grey--text">2017 . Drama/Science fiction film . 2h 21m</span>
        </div>
      </v-card-title>
      <v-card-text>
        In the near feature, a eary Logan (Huge Jackman) cares for an ailing Professor
        X (Patrick Stewart) at a remote outpost on the Mexian border. His plan to
        hide from the outside world gets upended when he meets a young mutant (Dafne Keen)
        who is very much like him. Logan must now protect the girl and battle the dark
        forces that want to capture her.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="purle">Rate this movie</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    </v-flex>
    <v-flex xs4>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Star Wars: The Last Jedi</div>
          <span class="grey--text">2017 . Fantasy/Science fiction film . 2h 35m</span>
        </div>
      </v-card-title>
      <v-card-text>
        Luke Skywalker's peaseful and solitary exsitence gets upended when he encounters Ray,
      a young woman who shows strong signs of the Force. That changes their lives forever.
      Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia
      and the Resistance for supremacy of the galaxy.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="purle">Rate this movie</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    </v-flex>
    <v-flex xs4>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Wonder Woman</div>
          <span class="grey--text">2017 . Fantasy/Science fiction film . 2h 21m</span>
        </div>
      </v-card-title>
      <v-card-text>
        Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons,
      trained to be an unconqueralble warrior. Raised on a tells her about the
      massive conflict that's raging in the outside world. Conviced that she can stop
      the threat, Diana leaves her home for the first time. Fighting alongside men in
      a war to end all wars, she finally discovers her full powers and true destiny.
      </v-card-text>
      <v-card-actions>
        <v-btn text color="purle">Rate this movie</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    </v-flex>
  </v-layout>
</template>
-->

<template>
  <v-layout row warp>
    <v-flex xs4 v-for="movie in movies" :key="movie._id">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ movie.name }}</div>
            <span class="grey--text">{{ movie.release_year }}.{{ movie.genre }}</span>
          </div>
        </v-card-title>
        <v-card-text>
          {{ movies.description }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Movies',
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.featchMovies();
  },
  motheds: {
    async featchMovies() {
      return axios({
        mothod: 'get',
        url: 'http://localhost:8081/movies',
      })
        .then((response) => {
          this.movies = response.data.movies;
        })
        .catch(() => {});
    },
  },
};
</script>
