<template>
  <div class="search-to-sell">
    <div class="search-to-sell--heading">{{$t("searchtosell.chooseaproduct")}}</div>
    <div class="search-to-sell--sub">{{$t("searchtosell.findproduct")}}</div>
    <div class="divider"></div>
    <div class="search-to-sell--searchbar">
      <div class="search-to-sell--icon">
        <i class="material-icons tiny">search</i>
      </div>
      <div class="search-to-sell--input">
        <input type="text" :placeholder="$t('searchtosell.search')" />
      </div>
    </div>
    <div class="search-to-sell--results">
      <div class="search-to-sell--result">
        <div class="search-to-sell--result__img">
          <img src="@/assets/images/handbag1.jpg" />
        </div>
        <div class="search-to-sell--result__text">
          <div class="search-to-sell--result__title">Supreme Motion Logo Tee (SS20) Black</div>
          <div class="search-to-sell--result__sub">Loyal Blue / White-Habanero Red-Black</div>
        </div>
      </div>
      <div class="search-to-sell--result">
        <div class="search-to-sell--result__img">
          <img src="@/assets/images/handbag2.jpg" />
        </div>
        <div class="search-to-sell--result__text">
          <div class="search-to-sell--result__title">Supreme Motion Logo Tee (SS20) Black</div>
          <div class="search-to-sell--result__sub">Loyal Blue / White-Habanero Red-Black</div>
        </div>
      </div>
      <div class="search-to-sell--result">
        <div class="search-to-sell--result__img">
          <img src="@/assets/images/handbag3.jpg" />
        </div>
        <div class="search-to-sell--result__text">
          <div class="search-to-sell--result__title">Supreme Motion Logo Tee (SS20) Black</div>
          <div class="search-to-sell--result__sub">Loyal Blue / White-Habanero Red-Black</div>
        </div>
      </div>
      <div class="search-to-sell--result">
        <div class="search-to-sell--result__img">
          <img src="@/assets/images/handbag4.jpg" />
        </div>
        <div class="search-to-sell--result__text">
          <div class="search-to-sell--result__title">Supreme Motion Logo Tee (SS20) Black</div>
          <div class="search-to-sell--result__sub">Loyal Blue / White-Habanero Red-Black</div>
        </div>
      </div>
    </div>
  </div>
</template>