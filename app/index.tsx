import { Text, View, ScrollView, StyleSheet } from "react-native";

const staticFonts = [
  { fontFamily: 'Poppins-Regular', imported: true },
  { fontFamily: 'Lato-Regular', imported: true },
  { fontFamily: 'Ubuntu-Regular', imported: true },
  { fontFamily: 'PTSerif-Regular', imported: true },
  { fontFamily: 'PressStart2P-Regular', imported: true }
];

const variableFonts = [
  { fontFamily: 'Inter-Variable', imported: true },
  { fontFamily: 'Montserrat-Variable', imported: true },
  { fontFamily: 'Oswald-Variable', imported: true },
  { fontFamily: 'Raleway-Variable', imported: true },
  { fontFamily: 'RobotoFlex-Variable', imported: true }
];


const daftarMahasiswa = [
  { stambuk: "105841107622", nama: "MUH. FIKRIR MAULANA" },
  { stambuk: "105841107722", nama: "MUHAMMAD HASRADDIN HASNAN" },
  { stambuk: "105841107822", nama: "MUHAMMAD DZULFIKAR HIDAYAT" },
  { stambuk: "105841107922", nama: "AHMAD YANI" },
  { stambuk: "105841108022", nama: "ROSFIKA" },
  { stambuk: "105841108122", nama: "YOGI A AMMA" },
  { stambuk: "105841108222", nama: "USRAN" },
  { stambuk: "105841108322", nama: "RIKA ARMAYANI" },
  { stambuk: "105841108422", nama: "ANNAS URBACH NINGRUM" },
  { stambuk: "105841108522", nama: "BESSE TALEHA" },
  { stambuk: "105841108622", nama: "DINDA SAFITRI" },
  { stambuk: "105841108722", nama: "MUHAMMAD FAREL" },
  { stambuk: "105841108822", nama: "FAUZAN AZHARI" },
  { stambuk: "105841108922", nama: "M.FADIL AHMAD" },
  { stambuk: "105841109022", nama: "DAYANG AISYAH" },
  { stambuk: "105841109122", nama: "ILFAUZA" },
  { stambuk: "105841109222", nama: "SA'BAN" },
  { stambuk: "105841109322", nama: "NUR FADILAH" },
  { stambuk: "105841109422", nama: "WA NANDA" },
  { stambuk: "105841109522", nama: "MUH.TEGAR" },
  { stambuk: "105841109622", nama: "HANNA MARYAM" }, // Index 20 - Data Saya
  { stambuk: "105841110022", nama: "RAYHANATUL JANNAH" },
  { stambuk: "105841110122", nama: "AFIFAH AULIYAH" },
  { stambuk: "105841110222", nama: "JOKO WIDODO" },
  { stambuk: "105841110322", nama: "KARTIKA SARI" },
  { stambuk: "105841110422", nama: "LINA MARLINA" },
  { stambuk: "105841110522", nama: "MADE SUTRISNO" },
  { stambuk: "105841111022", nama: "NURUL HABIBAH" },
];

export default function Index() {
  const indexSaya = 20;
  const dataSaya = daftarMahasiswa[indexSaya];
  const totalMahasiswa = daftarMahasiswa.length;

  const getCircularData = (currentIndex: number, offset: number, count: number): { stambuk: string; nama: string; }[] => {
    const result: { stambuk: string; nama: string; }[] = [];
    
    for (let i = 0; i < count; i++) {
      let targetIndex = currentIndex + offset + i;
      
      if (targetIndex < 0) {
        targetIndex = totalMahasiswa + targetIndex;
      }
      
      if (targetIndex >= totalMahasiswa) {
        targetIndex = targetIndex - totalMahasiswa;
      }
      
      result.push(daftarMahasiswa[targetIndex]);
    }
    
    return result;
  };

  const namaSebelum = getCircularData(indexSaya, -5, 5);
  
  const namaSesudah = getCircularData(indexSaya, 1, 5);

  const allFonts = [...staticFonts, ...variableFonts];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.mainContent}>
        
        <Text style={styles.headerInfo}>
          Font Import Status: {allFonts.length} fonts imported successfully
        </Text>
        <Text style={styles.subHeaderInfo}>
          5 Static Fonts + 5 Variable Fonts = 10 Total Fonts
        </Text>

        <Text style={styles.sectionTitle}>
          5 Nama Sebelum (Font Statis)
        </Text>
        {namaSebelum.map((mhs, index) => (
          <Text 
            key={`before-${mhs.stambuk}`} 
            style={[
              styles.nameText,
              { 
                fontFamily: staticFonts[index].fontFamily,
                fontWeight: index % 2 === 0 ? 'bold' : 'normal'
              }
            ]}
          >
            {index + 1}. {mhs.nama}
          </Text>
        ))}

        <View style={styles.myDataContainer}>
          <Text style={[styles.myNameText, { fontFamily: 'PressStart2P-Regular' }]}>
            DATA SAYA
          </Text>
          <Text style={styles.myNameMain}>
            {dataSaya.nama}
          </Text>
          <Text style={styles.myStambuk}>
            {dataSaya.stambuk}
          </Text>
          <Text style={styles.indexInfo}>
            Urutan ke-{indexSaya + 1} dari {totalMahasiswa} mahasiswa
          </Text>
        </View>

        {/* 5 Nama Sesudah dengan Font Variabel */}
        <Text style={styles.sectionTitle}>
          5 Nama Sesudah (Font Variabel)
        </Text>
        {namaSesudah.map((mhs, index) => {

          const fontWeights: ('300' | '400' | '500' | '600' | '700')[] = ['300', '400', '500', '600', '700'];
          const fontWeight = fontWeights[index];
          
          return (
            <Text 
              key={`after-${mhs.stambuk}`} 
              style={[
                styles.nameText,
                { 
                  fontFamily: variableFonts[index].fontFamily,
                  fontWeight: fontWeight
                }
              ]}
            >
              {index + 1}. {mhs.nama}
            </Text>
          );
        })}

        {/* Info Circular Logic */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Aturan Khusus Urutan:</Text>
          <Text style={styles.infoText}>
            ✓ Jika urutan di bawah 5, maka urutan melanjut ke akhir daftar
          </Text>
          <Text style={styles.infoText}>
            ✓ Menggunakan 10 font berbeda (5 statis + 5 variabel)
          </Text>
          <Text style={styles.infoText}>
            ✓ Font weight bervariasi untuk tampilan yang dinamis
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  mainContent: {
    alignItems: 'center',
    maxWidth: 400,
    width: '100%'
  },
  headerInfo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f10bbfff',
    marginBottom: 5,
    textAlign: 'center'
  },
  subHeaderInfo: {
    fontSize: 12,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    color: '#d20b96ff',
    textAlign: 'center'
  },
  nameText: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: '100%'
  },
  myDataContainer: {
    marginVertical: 30,
    padding: 25,
    borderWidth: 3,
    borderColor: '#1976d2',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    width: '100%'
  },
  myNameText: {
    fontSize: 12,
    color: '#1976d2',
    marginBottom: 10,
    letterSpacing: 1
  },
  myNameMain: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#1976d2'
  },
  myStambuk: {
    fontWeight: '800',
    fontSize: 16,
    color: '#d32f2f',
    marginBottom: 10
  },
  indexInfo: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic'
  },
  infoContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1976d2',
    width: '100%'
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 10
  },
  infoText: {
    fontSize: 14,
    color: '#424242',
    marginBottom: 5,
    lineHeight: 20
  }
});