const IMP_MESSAGE_LVL_1 = `Llegasté!!! te estaba esperando. Soy el Crypto Duende y te guiaré para llegar al Nivel 2!

Hasta donde se, estuviste en una platica donde te hablaron de algoritmos y una que otra cosa mas de criptografía. Pues bien, debes saber que tengo un mensaje encriptado para tí. Es un mensaje que deberás desencriptar con un password. Te veo en el siguiente nivel donde te daré el mensaje, para llegar allá debes decidir que camino tomar en dirección a /nivel/2/:algoritmo.

¿Qué algoritmo sería el adecuado para desencriptar el mensaje?`

const IMP_MESSAGE_LVL_2 = `Bien hecho! ¿AES es apropiado cierto?.

Aquí esta el mensaje, debes desencriptarlo con la representación compacta de la audición!`

const WIZARD_MESSAGE_1 = `Bienvenido pequeño saltamontes.

Yo, el Mago de Llaves, te pediré que generes una nueva identidad de caballero la cual deberás usar el resto de tu aventura. Necesitamos caballeros en el escuadrón de algoritmo elíptico, así que no esperes más, crea las llaves de tu identidad y comparte conmigo tu cara pública, lo que el mundo sabrá de ti.`

const WIZARD_MESSAGE_2 = `Bien, he hecho llegar tu llave pública a todo el reino. Si en verdad es tu llave pública, haz de tener el secreto contigo para descifrar este mensaje que he encriptado para tí.`

const CROW_MESSAGE = `Hola, yo soy el Cuervo Imperial. Llevo y traigo mensajes para el General, soy muy metiche así que solo me hacen llevar mensajes encriptados. Me pidieron que te entregara esto.`

const CRYPTO_GENERAL_MESSAGE = `Lo esperaba candidato. Soy el Crypto General, tengo un documento para usted que deberá firmar.`

const CRYPTO_GENERAL_MESSAGE_FAIL = `No puedo verificar esta firma con su cara pública candidato, pruebe de nuevo.`

const CRYPTO_GENERAL_MESSAGE_SUCCESS = `Perfecto, con su firma donde debe estar. Ya solo debe demostrar que puede identificar impostores. Diríjase a /nivel/final/identifica-al-impostor`

const LAST_CHAP_MESSAGE = `Caballero Saltamontes, ahora que ya es parte de nuestras filas, ayúdanos a descubrir impostores. Las siguientes personas firmaron el documento del pueblo pero algunos de ellos no son los verdaderos firmantes. Por favor identifiquelos.`

const LAST_CHAP_MESSAGE_FAIL = `Creo que debería verificar su respuesta, no creo que quiera que encerremos a gente inocente.`

const LAST_CHAP_MESSAGE_SUCCESS = `Excelente, ahora usted es todo un Crypto Caballero. Notifiquele a sus amigos para recibir aplausos.`

const AES_HASH_MESSAGE = 'Para continuar tu camino a Crypto Caballero es necesario que domines la magia de la criptografía asimétrica. Puedes encontrar al Mago de las Llaves en /nivel/3/mago-de-llaves donde debes demostrar que tienes lo necesario.'

const ECC_MESSAGE_TO_LEVEL_4 = 'Ve a cifrar y descifrar en /nivel/4/mensajes-secretos'

const ECC_MESSAGE_CAMARON = 'Buenas tardes candidato a Crypto Caballero. Es menester preguntarle, ¿Qué se lleva al camarón que se duerme?. Nunca le de mensajes legibles al cuervo!'

const ECC_MESSAGE_TO_LEVEL_5 = 'Es cierto, la corriente. Lo espero en /nivel/5/firma-tu-union para concretar su unión a nuestras filas!'

module.exports = {
  IMP_MESSAGE_LVL_1,
  IMP_MESSAGE_LVL_2,
  WIZARD_MESSAGE_1,
  WIZARD_MESSAGE_2,
  CROW_MESSAGE,
  CRYPTO_GENERAL_MESSAGE,
  CRYPTO_GENERAL_MESSAGE_FAIL,
  CRYPTO_GENERAL_MESSAGE_SUCCESS,
  LAST_CHAP_MESSAGE,
  LAST_CHAP_MESSAGE_FAIL,
  LAST_CHAP_MESSAGE_SUCCESS,
  AES_HASH_MESSAGE,
  ECC_MESSAGE_TO_LEVEL_4,
  ECC_MESSAGE_CAMARON
}
