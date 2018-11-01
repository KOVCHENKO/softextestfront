<template>
  <div class="page-container">
  <main role="main">
      <carousel :perPageCustom="[[1, 1], [700, 3]]">
          <slide>
              <img @click="goToSource(`https://stackoverflow.com`)" class="d-block w-100" src="https://2.bp.blogspot.com/-KMMTTTDkmWM/WINazowZ4WI/AAAAAAAAAe4/OTTL4gi9ZWkGYesYCR7WBnFx5uzGdoGfACLcB/s1600/Google-Assistant.gif" alt="First slide">
          </slide>
          <slide>
              <img @click="goToSource(`https://mail.ru`)" class="d-block w-100" src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/8/8e/Landscape-5-800x400.jpg/revision/latest?cb=20170523222436" alt="Second slide">
          </slide>
          <slide>
              <img @click="goToSource(`https://medium.com`)" class="d-block w-100" src="https://static1.squarespace.com/static/59d4e27b29f187499cb88f6a/t/5b3cbda12b6a2817334d9c68/1530707362973/Malta3-Pentasia-800x400.jpg" alt="Third slide">
          </slide>
          <slide>
              <img @click="goToSource(`https://google.com`)" class="d-block w-100" src="https://2.bp.blogspot.com/-KMMTTTDkmWM/WINazowZ4WI/AAAAAAAAAe4/OTTL4gi9ZWkGYesYCR7WBnFx5uzGdoGfACLcB/s1600/Google-Assistant.gif" alt="First slide">
          </slide>
          <slide>
              <img @click="goToSource(`https://microsoft.com`)" class="d-block w-100" src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/8/8e/Landscape-5-800x400.jpg/revision/latest?cb=20170523222436" alt="Second slide">
          </slide>
          <slide>
              <img @click="goToSource(`https://yandex.ru`)" class="d-block w-100" src="https://static1.squarespace.com/static/59d4e27b29f187499cb88f6a/t/5b3cbda12b6a2817334d9c68/1530707362973/Malta3-Pentasia-800x400.jpg" alt="Third slide">
          </slide>
      </carousel>
    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">First heading.</h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-fluid mx-auto" alt="500x500" style="width: 500px; height: 500px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_166c5b118d2%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_166c5b118d2%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Second heading.</h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="featurette-image img-fluid mx-auto" alt="500x500" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_166c5b118dc%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_166c5b118dc%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 500px; height: 500px;">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">Third heading. </h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-fluid mx-auto" alt="500x500" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_166c5b118e1%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_166c5b118e1%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 500px; height: 500px;">
        </div>
      </div>

      <hr class="featurette-divider">
    </div><!-- /.container -->
  </main>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    goToSource (link) {
      window.location.href = link
    }
  }
}
</script>
