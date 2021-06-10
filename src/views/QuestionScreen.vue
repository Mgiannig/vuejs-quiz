<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="6" offset-md="3"> </b-col>
      </b-row>
      <b-row>
        <b-col md="6" offset-md="3">
          <div v-if="index >= questions.length && totalAnswered">
            <h3>
              You got {{ correctAnswered }} out of
              {{ totalAnswered }} questions.
            </h3>
            <br /><br />
            <p><router-link to="/categories">Go to categories</router-link></p>
          </div>
          <QuestionBox
            v-else-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QuestionBox from "@/components/QuestionBox.vue";
import categories_arr from "@/data/questions";

export default {
  props: {},
  components: {
    QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      correctAnswered: 0,
      totalAnswered: 0,
    };
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) this.correctAnswered++;
      this.totalAnswered++;
    },
  },
  mounted: function () {
    const categoryName = this.$route.params.id;
    let categoryQuestions = categories_arr.groups.filter(
      (x) => x.name === categoryName
    )[0];

    categoryQuestions = categoryQuestions.questions

    this.questions = categoryQuestions;
  },
};
</script>