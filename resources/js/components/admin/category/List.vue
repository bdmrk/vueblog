<template>

  <div>

      <!-- Main content -->
      <section class="content">
          <div class="row">
              <div class="col-12">
                  <div class="card">
                      <div class="card-header">
                          <h3 class="card-title">Category List</h3>
                          <div class="card-tools">
                              <button class="btn btn-sm btn-primary" >Add Category</button>
                          </div>
                      </div>
                      <!-- /.card-header -->
                      <div class="card-body">
                          <table id="example2" class="table table-bordered table-hover">
                              <thead>
                              <tr>
                                  <th>SL</th>
                                  <th>Category</th>
                                  <th>Actions</th>

                              </tr>
                              </thead>
                              <tbody>

                              <tr>
                                  <td>1</td>
                                  <td>Mobile</td>
                                  <td>
                                      <a href="#">Edit</a>
                                      ||
                                      <a href="#">Delete</a>
                                  </td>

                              </tr>

                              </tbody>

                          </table>
                      </div>
                      <!-- /.card-body -->
                  </div>
                  <!-- /.card -->

              </div>
              <!-- /.col -->
          </div>
          <!-- /.row -->
      </section>
      <!-- /.content -->
  </div>





</template>

<script>
    export default {
        name: "List"
    }
</script>

<style scoped>

</style>