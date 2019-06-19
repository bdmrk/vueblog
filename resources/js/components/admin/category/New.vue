<template>
    <div class="mt-5">
        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <!-- left column -->
                    <div class="col-md-8">
                        <!-- general form elements -->
                        <div class="card card-info">
                            <div class="card-header">
                                <h3 class="card-title">Add New Category</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form role="form" @click.prevent="addCategory()">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="categoryId">Category Name</label>
                                        <input type="text" class="form-control" id="categoryId"
                                               placeholder="Write Category" v-model="form.cat_name" name="cat_name">
                                    </div>



                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer">
                                    <button type="submit" class="btn btn-success">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    export default {
        name: "New",
        data () {
            return {
                // Create a new form instance
                form: new Form({
                    cat_name: '',

                })
            }
        },

        methods: {
            addCategory() {
                this.form.post('/add-category')
                    .then((response)=>{
                        console.log(response.data)
                    })
                    .catch(()=>{
                        console.log('wrong')
                    })
            },
        }
    }
</script>

<style scoped>

</style>