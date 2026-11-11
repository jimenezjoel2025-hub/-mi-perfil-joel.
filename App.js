import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  const mostrarContacto = () => {
    Alert.alert(
      'Contacto',
      '¡Gracias por visitar mi perfil estudiantil!'
    );
  };

  const mostrarPortafolio = () => {
    Alert.alert(
      'Mi portafolio',
      'Aquí publicaré mis próximos proyectos.'
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.tarjeta}>
          <Text style={styles.encabezado}>MI PERFIL ESTUDIANTIL</Text>

       <Image
        source={require('./assets/jbj.jpg')}
        style={styles.foto}
          />

          <Text style={styles.nombre}>
            Joel Barrientos Jiménez
          </Text>

          <Text style={styles.titulo}>
            Estudiante de Informática
          </Text>

          <Text style={styles.descripcion}>
            Soy estudiante de Informática y me interesa aprender
            desarrollo web, programación y creación de aplicaciones
            móviles.
          </Text>

          <Text style={styles.subtitulo}>Mis habilidades</Text>

          <View style={styles.badges}>
            <Text style={styles.badge}>HTML</Text>
            <Text style={styles.badge}>CSS</Text>
            <Text style={styles.badge}>JavaScript</Text>
            <Text style={styles.badge}>React Native</Text>
          </View>

          <View style={styles.botones}>
            <Pressable
              style={styles.botonPrincipal}
              onPress={mostrarContacto}
            >
              <Text style={styles.textoBoton}>📩 Contáctame</Text>
            </Pressable>

            <Pressable
              style={styles.botonSecundario}
              onPress={mostrarPortafolio}
            >
              <Text style={styles.textoBoton}>🌐 Mi portafolio</Text>
            </Pressable>
          </View>

          <Text style={styles.pie}>
            Mi primera aplicación creada con React Native y Expo Go.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#071A33',
  },

  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#071A33',
  },

  tarjeta: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },

  encabezado: {
    marginBottom: 20,
    color: '#0B5CAD',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textAlign: 'center',
  },

    foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#13B5C8',
    marginBottom: 18,
    resizeMode: 'cover',
  },

  nombre: {
    color: '#102A43',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  titulo: {
    marginTop: 6,
    color: '#0B5CAD',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },

  descripcion: {
    marginTop: 18,
    color: '#52606D',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
  },

  subtitulo: {
    alignSelf: 'flex-start',
    marginTop: 24,
    marginBottom: 12,
    color: '#102A43',
    fontSize: 18,
    fontWeight: 'bold',
  },

  badges: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  badge: {
    overflow: 'hidden',
    paddingHorizontal: 14,
    paddingVertical: 8,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#0B5CAD',
    borderRadius: 18,
  },

  botones: {
    width: '100%',
    marginTop: 26,
    gap: 12,
  },

  botonPrincipal: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#11845B',
    borderRadius: 12,
  },

  botonSecundario: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#0B5CAD',
    borderRadius: 12,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  pie: {
    marginTop: 24,
    color: '#7B8794',
    fontSize: 12,
    textAlign: 'center',
  },
});