<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <img src="./assets/logo.png" alt="VueJs" />
      </div>
      <div class="">
        <h1 class="title">Vue Convert Units</h1>
        <h2 class="subtitle">
          vue integration for <strong>convert-units</strong>
        </h2>
      </div>
    </nav>
    <main>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-half has-text-right">
              <h2 class="is-size-4">Best match</h2>
              <p class="is-size-6 has-text-grey-light">It will find the best match automatically</p>
              <div class="field has-addons has-addons-right">
                <p class="control">
                  <input class="input" type="text" v-model="units" placeholder="Conversion units">
                </p>
                <p class="control">
                  <span class="select">
                    <select v-model="unitsFrom">
                      <option v-for="(possibility, index) in possibilities" :key="index" :value="possibility">{{possibility}}</option>
                    </select>
                  </span>
                </p>
              </div>

              <p>{{units | convert(unitsFrom, 'best')}}</p>
            </div>

            <div class="column is-half">
              <pre v-text="unitsCode"></pre>
              <pre v-text="unitsRaw"></pre>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-half has-text-right">
              <h2 class="is-size-4">Manual Conversion</h2>
              <p class="is-size-6 has-text-grey-light">You choose what format to convert</p>
              <div class="field has-addons has-addons-right">
                <p class="control">
                  <input class="input" type="text" v-model="manualUnits" placeholder="Enter a number">
                </p>
                <p class="control">
                  <span class="select">
                    <select v-model="manualUnitsFrom">
                      <option v-for="(possibility, index) in possibilities" :key="index" :value="possibility">{{possibility}}</option>
                    </select>
                  </span>
                </p>
              </div>

              <div class="field has-addons has-addons-right">
                <p class="control">
                  <input class="input" type="text" v-model="manualSuffix" placeholder="Conversion suffix">
                </p>
                <p class="control">
                  <span class="select">
                    <select v-model="manualUnitsTo">
                      <option v-for="(possibility, index) in possibilities" :key="index" :value="possibility">{{possibility}}</option>
                    </select>
                  </span>
                </p>
              </div>

            </div>

            <div class="column is-half">
              <pre v-text="manualCode"></pre>
              <pre>{{ manualUnits | convert(manualUnitsFrom, manualUnitsTo, manualSuffix) }}</pre>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          Made with &hearts; by <a href="#">Codekraft Studio</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      units: 12000,
      unitsFrom: 'm',
      manualUnits: 50,
      manualUnitsFrom: 'kg',
      manualUnitsTo: 'g',
      manualSuffix: 'grams',
      possibilities: this.$convert().possibilities()
    }
  },
  computed: {
    manualCode () {
      return `{{ ${this.manualUnits} | convert('${this.manualUnitsFrom}', '${this.manualUnitsTo}') }}`
    },
    unitsCode () {
      return `{{ ${this.units} | convert('${this.unitsFrom}', 'best') }}`
    },
    unitsRaw () {
      return this.$convert(this.units)
        .from(this.unitsFrom)
        .toBest()
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

#app .field {
  margin: .75rem;
}

#app pre {
  margin-bottom: 10px;
}

#app main {
  flex-grow: 1;
}

.navbar {
  padding: 20px;
  display: flex;
  justify-content: center;
}
.navbar-brand img {
  width: 64px;
  height: 64px;
  margin-right: 16px;
}
</style>
