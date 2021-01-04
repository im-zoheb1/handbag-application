<template>
  <div class="dashboard__right">
    <div class="dashboard__right--inner">
      <div class="settings">
        <div class="settings--header">Account Settings</div>
        <div class="settings--headings">
          <span>Profile</span>
          <span class="edit-link" @click="$router.push('/update_profile')">edit</span>
        </div>
        <div class="settings--attr">
          <div class="settings--attr__item">
            <div class="settings--attr__heading">name</div>
            <div class="settings--attr__text">Haider Yaqoob</div>
          </div>
          <div class="settings--attr__item">
            <div class="settings--attr__heading">selected currency</div>
            <div class="settings--attr__text">USD</div>
          </div>
          <div class="settings--attr__item">
            <div class="settings--attr__heading">email address</div>
            <div class="settings--attr__text">abc_xyz@gmail.com</div>
          </div>
          <div class="settings--attr__item">
            <div class="settings--attr__heading">username</div>
            <div class="settings--attr__text">userabc293848839394</div>
          </div>
          <div class="settings--attr__item">
            <div class="settings--attr__heading">change password</div>
            <div class="settings--attr__text link">Haider Yaqoob</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="settings--infos">
          <div class="settings--infos__item">
            <div class="settings--headings">
              <span>buyer info</span>
              <span class="edit-link" @click="$router.push('/buying_info')">edit</span>
            </div>
            <div class="settings--infos__text">You do not have any buyer information on file.</div>
          </div>
          <div class="divider"></div>
          <div class="settings--infos__item">
            <div class="settings--headings">
              <span>shipping info</span>
              <span class="edit-link" @click="$router.push('/shipping_info')">edit</span>
            </div>
            <div class="settings--infos__text">You do not have any shipping information on file.</div>
          </div>
          <div class="divider"></div>
          <div class="settings--infos__item">
            <div class="settings--headings">
              <span>Billing info</span>
              <span class="edit-link" @click="$router.push('/billing_info')">edit</span>
            </div>
            <div class="settings--infos__text">You do not have any seller information on file.</div>
          </div>
          <div class="divider"></div>
          <div class="settings--infos__item">
            <div class="settings--headings">
              <span>payout info</span>
              <span class="edit-link">edit</span>
            </div>
            <div class="settings--infos__text">You do not have any account information on file.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>