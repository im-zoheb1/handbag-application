<template>
  <div class="model">
    <div class="model--inner">
      <div class="model--close" @click.capture="$store.state.tradeModel = false">
        <span class="material-icons">close</span>
      </div>
      <div class="model--table__container">
        <table class="model--table">
          <tr class="model--table__row" v-for="i in 20" :key="i">
            <td class="model--table__cell">unknown</td>
            <td class="model--table__cell">$ 457</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>