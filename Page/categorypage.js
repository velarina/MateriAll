import react from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

import CustomButton from "../components/CustomButtonYellow";
import ArrowBack from "../components/ArrowBack";

const karate = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#9D0000" }}>
      <StatusBar style="auto" />
      <ArrowBack onPress={() => navigation.navigate("homepage")} />
      <View style={styles.materi}>
        <Text style={styles.title}>Karate</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTittle}>Definisi</Text>
          <Text style={styles.sectionContent}>
            adalah seni bela diri yang berasal dari Jepang, dan sedikit
            dipengaruhi oleh seni bela diri Cina "Kempo" Karate dibawa masuk ke
            Jepang lewat Okinawa dan mulai berkembang di Ryukyu Islands. Pertama
            kali disebut "Tote” yang berarti seperti “Tinju China”. Nasionalisme
            Jepang pada saat itu sedang tinggi-tingginya ketika karate masuk ke
            Jepang,, sehingga Sensei Gichin Funakoshi mengubah kanji Okinawa
            (Tote: Tinju China) dalam kanji Jepang menjadi ‘karate’ (tangan
            kosong) agar lebih mudah diterima oleh masyarakat Jepang. Karate
            terdiri dari atas dua kanji. Yang pertama adalah ‘Kara’ 空 dan
            berarti ‘kosong’. Dan yang kedua, ‘te’ 手, berarti ‘tangan'. Yang
            dua kanji bersama artinya “tangan kosong” 空手
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTittle}>Ukuran Lapangan</Text>
          <Text style={styles.sectionContent}>
            Panjang matras: 10 m Lebar matras: 10 m Tinggi matras: 1 m Material
            atau bahan: Eva spon dilengkapi density yang bagus
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTittle}>Juri Yang Menilai</Text>
          <Text style={styles.sectionContent}>
            Shunshin: Juri yang tugasnya adalah memimpin jalannya pertandingan
            karate. Tatami manager: Seorang juri dengan tugas mengawasi
            pertandingan selama berlangsung dari awal sampai akhir. Fukushin:
            Juri yang berperan penting dalam membantu wasit mengambil keputusan
            penting saat bertanding. Kansa: Juri yang berfungsi sebagai
            verifikator. Tugasnya adalah memeriksa apakah karateka telah membawa
            semua kelengkapan yang disyaratkan dalam pertandingan.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTittle}>Waktu dan Skor Pertandingan</Text>
          <Text style={styles.sectionContent}>
            2 menit, 3 menit (babak final), mulai dari 0.0 hingga 10.0
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTittle}>Teknik Pertandingan</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTittle}>Organisasi</Text>
        </View>
        <View style={{ paddingTop: 50, marginBottom: 50 }}>
          <CustomButton
            style={styles.primaryButton}
            onPress={() => navigation.navigate("quizpage")}
            text="Coba Quiz"
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default karate;

const styles = StyleSheet.create({
  materi: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 52,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 32,
    padding: 16,
    marginTop: 12,
  },
  section: {
    marginTop: 24,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  sectionTittle: {
    fontWeight: "bold",
    textAlign: "left",
    color: "black",
    fontSize: 22,
    paddingBottom: 16,
  },
  sectionContent: {
    textAlign: "left",
    color: "black",
    fontSize: 16,
  },
});
