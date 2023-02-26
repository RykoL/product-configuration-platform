<h1>Upload a new environment</h1>

<form method="post" enctype="multipart/form-data">
    <label>
        Name
        <input type="text" name="name" required minlength="5"/>
    </label>
    <label >
        File
        <input type="file" name="file" accept=".hdr,.exr" required/>
    </label>
    <button>Upload</button>
</form>