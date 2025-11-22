function submitForm(){
    const nama = document.getElementById("nama").value;
        const tanggal = document.getElementById("tanggalLahir").value;
        const pesan = document.getElementById("pesan").value;
        
        let gender = "Tidak dipilih";
        if (document.getElementById("laki-laki").checked) {
            gender = document.getElementById("laki-laki").value;
        } else if (document.getElementById("perempuan").checked) {
            gender = document.getElementById("perempuan").value;
        }

    
        if (nama == "" || tanggal == "" || pesan == "") {
            alert("Harap isi semua data!");
            return; 
        }

        document.getElementById("outputNama").textContent = nama;
        document.getElementById("outputTanggalLahir").textContent = tanggal;
        document.getElementById("outputGender").textContent = gender;
        document.getElementById("outputPesan").textContent = pesan;
};