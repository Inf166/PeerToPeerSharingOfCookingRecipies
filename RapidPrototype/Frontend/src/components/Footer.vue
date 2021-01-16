<template>
  <div class="footer">
    <ul class="footer-links">
      <li>
        <router-link to="/datenschutz">
          <span class="">Datenschutz</span>
        </router-link>
      </li>
      <li>
        <router-link to="/nutzungsbedingungen">
          <span class="">Nutzungsbedingungen</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
    .footer {
      width: 100%;
    }
    .footer-links {
      list-style: none;
      display: flex;
      float: left;
    }
    .footer-links li{
      margin-right: 0.5rem;
    }
    .footer-links li a {
      text-decoration: none;
      color: var(--highlight-orange);
    }
</style>