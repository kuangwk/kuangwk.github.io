/*TMODJS:{"version":1,"md5":"88c2f6c1a18305b56466d3dd61d2a687"}*/
template('post','<form class="form-signin"> <h2 class="form-signin-heading">Post a message</h2> <label for="inputTitle" class="sr-only">Title</label> <input name="title" type="text" id="inputTitle" class="form-control" placeholder="Title" required="" autofocus="true"> <textarea class="form-control" name="content" id="" cols="30" rows="10"></textarea> <div class="radio"> type: <br/> <label> <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked> area </label> <label> <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"> frineds </label> <label> <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3"> private <input type="text" placeholder=\'private to whom\' name="friend_name"> </label> <button class="btn btn-success btn-block" >post</button> </form> <script src=\'./js/post.js\'></script> ');