import React from 'react';
import './Content.scss';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import Anouncement from './Anouncement';


const Content = () => {
    return (
        <div className='content-wrapper'>
            <div className='left-side-bar'>
                <LeftSideBar />
            </div>

            <div className='anouncement-wrapper'>
                <hr />

                <h1>Pengumuman Akademis</h1>
                <Anouncement
                    by='Inggit Pertiwi'
                    title='Pengisian KRS Mahasiswa Informatika'
                    day='Sunday'
                    date='31 January 2021'
                    time='2:20 PM'
                    main='Dear all mahasiswa, Diberitahukan bahwa pengisian registrasi online (IRS) Fasilkom akan dibuka pada Selasa 2 Februari 2021 pukul 09.00 wib. Mohon untuk dijadikan perhatian.'
                    closing='Terima kasih'
                />

                <Anouncement
                    by='Ridwan Febriyanto'
                    title='Enrollment Mahasiswa Kelas PPL (B, C, D) Semester Genap 2020/2021'
                    day='Sunday'
                    date='31 January 2021'
                    time='1:03 PM'
                    main='Dear all mahasiswa yang akan mengambil mata kuliah PPL (kelas B,C,D) Genap 2020/2021, Untuk mendapatkan informasi penting terkait persiapan kuliah semester ini, dimohon untuk mulai enroll ke course page dengan link berikut: https://scele.cs.ui.ac.id/course/view.php?id=3071'
                // closing='Salam'
                />

                <Anouncement
                    by='Lim Yohanes Stefanus'
                    title='Daftar Calon Lulusan Gasal 2020/2021'
                    day='Thursday'
                    date='28 January 2021'
                    time='4:15 PM'
                    main='Dear Mahasiswa, berikut ini kami sampaikan datar nama calon lulusan semester ini untuk jenjang Sarjana, MIK dan DIK Jika ada nama yang belum termasuk, harap segera hubungi sekreakademik@cs.ui.ac.id. Kami tunggu respon Anda sampai Jumat 29 Januari 2021 pukul 10.00 WIB Selamat kepada para calon wisudawan '
                    closing='Salam'
                />

            </div>

            <div className='right-side-bar'>
                <RightSideBar />
            </div>
        </div>
    )
}

export default Content
