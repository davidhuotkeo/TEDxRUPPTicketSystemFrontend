<template>
  <div class="about">
    <scanner :login="false" title="Scan QR Code"></scanner>
  </div>
</template>

<script>
import scanner from '../components/Scanner'

export default {
  name: 'App',
  components: {
    scanner
  }
}
</script>
