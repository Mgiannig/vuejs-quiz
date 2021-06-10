<template>
  <div class="question-box-container">
    <b-jumbotron>
      <div v-if="currentQuestion.code">
        <h3>{{ currentQuestion.code.intro }}</h3>

        <prism language="javascript" :code="currentQuestion.code.code"></prism>

        <hr class="my-4" />
        <b-list-group>
          <b-list-group-item
            href
            v-for="(answer, idx) in answers"
            :key="idx"
            @click="selectAnswer(idx)"
            :class="answerClass(idx)"
            v-html="answer"></b-list-group-item
          >
        </b-list-group>
      </div>

      <div v-else>
        <h3>{{ currentQuestion.question }}</h3>

        <hr class="my-4" />
        <b-list-group>
          <b-list-group-item
            href
            v-for="(answer, idx) in answers"
            :key="idx"
            @click="selectAnswer(idx)"
            :class="answerClass(idx)"
            >{{ answer }}</b-list-group-item
          >
        </b-list-group>
      </div>

      <b-button
        variant="primary"
        @click="submitAnswer"
        :disabled="selectedIndex === null || submitted"
        >Submit</b-button
      >
      <b-button variant="success" href="#" @click="next">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import Prism from "vue-prismjs";
import "prismjs/themes/prism.css";
export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
  },
  components: {
    Prism,
  },
  data: function () {
    return {
      selectedIndex: null,
      correctIndex: null,
      submitted: false,
    };
  },
  computed: {
    answers() {
      const answers = this.currentQuestion.options.map((x) => {
        return x.text;
      });
      return answers;
    },
    question() {
      let question = this.currentQuestion.question;
      return this.htmlDecode(question);
    },
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.correctIndex = null;
        this.submitted = false;
      },
    },
  },
  methods: {
    selectAnswer(idx) {
      this.selectedIndex = idx;
    },
    submitAnswer() {
      const correctIndex = this.currentQuestion.options.findIndex(
        (x) => x.correct
      );
      console.log(correctIndex);
      this.correctIndex = correctIndex;
      const isCorrect = this.selectedIndex === this.correctIndex;

      this.submitted = true;
      this.increment(isCorrect);
    },
    answerClass(idx) {
      return {
        selected: this.selectedIndex === idx && this.submitted === false,
        correct: this.submitted && this.correctIndex === idx,
        incorrect:
          this.selectedIndex === idx &&
          this.submitted &&
          this.correctIndex !== idx,
      };
    },
    htmlDecode(input) {
      var e = document.createElement("textarea");
      e.innerHTML = input;
      // handle case of empty input
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    },
  },
  mounted() {
    console.log(this.currentQuestion);
  },
};
</script>


<style scoped>
.list-group {
  margin-bottom: 15px;
}
.btn {
  margin: 0 5px;
}

.list-group-item:hover {
  background-color: #eee;
  cursor: pointer;
}
.selected {
  background-color: lightblue;
}
.correct {
  background-color: lightgreen;
}
.incorrect {
  background-color: tomato;
}
</style>