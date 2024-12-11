<script setup lang="ts">
import { useFetchAuth } from '@/composables/useCustomFetch';

const authStore = useAuthStore();

const { data, status, execute } = await useFetchAuth(
  'https://dummyjson.com/auth/me'
);

const getUserData = async () => {
  await execute();
  authStore.user = data.value as IUserInfo;
};

const fN = computed(() => (data.value ? authStore.user.firstName : ''));
const pending = computed(() => (status.value === 'pending' ? true : false));

onMounted(() => getUserData());
</script>

<template>
  <div style="margin-top: 150px;">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente nam
    ullam, aspernatur odit eveniet ea error temporibus expedita et doloribus
    nulla alias aperiam corrupti quaerat ad illo amet, rerum quisquam
    perspiciatis aliquid ut harum mollitia! Dignissimos dolorem fugiat inventore
    atque quibusdam veritatis, impedit dolore sed deleniti laborum magni
    similique quisquam. Quas expedita fugit nulla, molestiae optio quasi
    officiis corrupti provident exercitationem? Tempora sit suscipit voluptatem
    aperiam eligendi quibusdam, quas, saepe illo et modi reiciendis nisi illum.
    Voluptate at ipsam, numquam illo ipsa odio fugit iure adipisci temporibus
    quis ullam. Animi magnam, maiores harum dicta voluptatibus autem optio
    explicabo, quasi iste soluta delectus deleniti quos aliquam repudiandae? Aut
    nostrum accusantium, quaerat deleniti, nam, sit doloribus labore tempore
    sequi neque distinctio eaque amet dignissimos! Eaque aut doloremque dolor
    ipsam commodi eveniet, rerum distinctio, voluptas iusto sapiente voluptatum
    esse possimus quis temporibus veniam ad cumque molestiae saepe asperiores.
    Nostrum natus sit hic dolor autem quae illo repudiandae ut provident a
    dolore molestiae enim, iusto dicta! Nihil maiores quisquam et quidem magni
    voluptate illum tempore, exercitationem, assumenda ut dolores atque saepe,
    doloribus deserunt recusandae aut. Fugit quidem dicta harum eum explicabo
    asperiores. Illo porro dicta nemo voluptatum distinctio optio voluptatem at
    exercitationem minus doloribus, dignissimos explicabo aut vitae provident
    nulla autem ab culpa possimus ea harum earum sunt ut aliquid? Aliquid, a
    eius repellat autem molestias recusandae ducimus! Ad nisi temporibus nulla
    eos fuga quos fugit aut ea facilis expedita veritatis assumenda, tempore
    eius porro. Molestias magnam laborum dicta pariatur odio nostrum hic! Nemo
    impedit dolore necessitatibus ut, expedita cumque nam, corrupti sint dicta
    molestiae maxime officia laudantium ullam nulla doloremque recusandae
    similique reprehenderit quibusdam, sed consequatur laborum id natus cum
    facilis? Ut, magni neque, ratione nesciunt reiciendis amet repellendus,
    earum ex consequuntur minus optio voluptates ipsam harum similique! Nostrum
    commodi quidem quia consectetur harum, saepe voluptates sunt exercitationem
    sapiente, repudiandae debitis eius laboriosam nemo? Repellendus architecto
    corporis minus, qui eligendi enim provident a illum voluptatem amet
    assumenda natus pariatur, ab nemo ad eveniet in repudiandae, sapiente aut
    sint fuga. Nobis aut voluptates eveniet vel pariatur repellendus aspernatur
    excepturi corrupti quis aperiam molestias, assumenda non adipisci placeat
    enim modi reiciendis. Voluptatem sit suscipit voluptatibus maxime eveniet!
    Asperiores esse incidunt voluptatum tempore explicabo quos quis temporibus
    aperiam, itaque unde error quod, animi, quaerat in deleniti maxime
    distinctio dignissimos voluptas facere rerum ab nisi beatae quae corrupti?
    Aliquid laborum totam nostrum explicabo rem incidunt magni, cumque, libero
    labore alias nam tempora iure dolore harum, nesciunt deserunt molestiae
    adipisci delectus nihil iste! Nostrum officiis voluptas deserunt neque.
    Laborum accusamus, ratione commodi veniam, possimus totam voluptate
    blanditiis ea, nesciunt delectus eveniet? Ipsam, autem sint! Numquam
    incidunt harum delectus magnam inventore vel ea velit ut est placeat,
    accusantium, voluptates, laboriosam minus. Iusto vero hic unde molestias
    eligendi neque architecto at soluta laboriosam, officiis doloremque
    consequuntur! Explicabo minima, eveniet nulla praesentium eius, recusandae
    architecto voluptatum dolor expedita necessitatibus cum dicta, quisquam ipsa
    odio itaque id sint. Nihil officiis iure, adipisci repellat minus ex quaerat
    veritatis, veniam ipsam quas, laboriosam culpa cum alias tempora dolor
    praesentium necessitatibus perferendis ducimus? Molestias aspernatur
    voluptatem, illum distinctio sapiente quia commodi accusantium neque quas
    itaque id eligendi similique vitae mollitia maiores nihil, error iusto
    molestiae, doloremque eveniet. Voluptas, necessitatibus eum! Laboriosam
    iusto ex aperiam inventore sapiente perspiciatis, voluptatum ratione
    reiciendis nostrum facere voluptates illum! Et a fugiat, dolor consequatur
    enim cum ipsam magnam inventore blanditiis illum repellendus molestiae
    architecto esse, accusamus provident? Sed accusamus provident porro
    dignissimos ab voluptatem doloribus repellat quaerat fugit odio tempore eius
    enim hic harum, autem eum non consequatur nihil quasi laborum illo maxime?
    Voluptatibus, repudiandae id! Commodi reiciendis iusto autem quam fugiat
    amet natus magnam! Mollitia vitae asperiores non repellendus eligendi ullam
    alias adipisci dolore rerum nobis! Deserunt perspiciatis mollitia obcaecati
    reiciendis molestias eveniet ad distinctio delectus! Ex amet officia non
    eligendi officiis? Vel quibusdam at possimus, vitae dolorem voluptatum
    officiis velit cum minima accusamus beatae impedit esse eum dolorum porro
    perspiciatis eligendi nesciunt, enim minus aperiam nulla eveniet aspernatur!
    Quis commodi explicabo error consequatur iure dolorem distinctio quisquam
    ratione sunt obcaecati! Iure ducimus dolor facere repellendus molestiae
    vitae. Possimus ut laudantium quae maxime fugit quia voluptas, commodi
    accusamus assumenda aperiam necessitatibus velit recusandae doloribus.
    Doloribus voluptate porro reprehenderit libero illo aliquam, eos nisi?
    Aperiam magnam, unde exercitationem voluptatum voluptas molestiae dolorum
    quisquam dolores nemo, nesciunt fugit ex. Exercitationem magnam, quaerat
    fugit nisi recusandae error labore tempore, dolorum vero veritatis laborum
    est libero nulla deserunt ad debitis. Quam ut quae reprehenderit quos nihil
    consequuntur hic earum vero, saepe modi aliquid suscipit a animi veniam
    corrupti id tempore. Labore vitae officia repellendus iure rerum,
    consequuntur beatae blanditiis ratione architecto nihil porro, harum qui
    nobis recusandae, illo possimus deserunt quod aut facilis voluptates dolorem
    numquam? Pariatur, molestias. Enim, veritatis repudiandae deserunt magnam,
    rem expedita ratione commodi, labore aperiam voluptatem praesentium numquam
    cupiditate saepe vero rerum. Facilis blanditiis dignissimos sunt veniam qui
    quod, reiciendis officiis nulla animi nemo! Sequi maxime esse harum dolore
    est eligendi assumenda autem, provident, ab voluptates eum nobis corrupti
    quidem voluptate nulla. Tempore maiores possimus aliquam odio delectus
    debitis hic non temporibus, earum similique dolorum itaque molestiae saepe.
    Qui corporis molestiae cum rem facilis error. Animi laboriosam explicabo rem
    quia blanditiis sint soluta. Cumque molestiae sed quibusdam ex sint
    recusandae corporis expedita nobis quia dignissimos repellendus fugiat
    dolorum eius a totam incidunt repudiandae delectus maxime adipisci beatae
    porro alias, aliquam officia perferendis! Vero optio numquam maiores
    dolores, sequi a modi laborum perspiciatis iusto explicabo pariatur totam
    quam, aliquid illum impedit enim temporibus nulla voluptate at delectus
    minus vitae, nisi doloremque. Doloremque magni dignissimos a. Quo minima
    architecto fuga illo recusandae iusto earum autem, expedita voluptate? Esse
    quam doloremque rem nisi eos itaque veritatis cumque repellat vel
    repudiandae. Obcaecati, quibusdam? Magni expedita quas harum, corporis
    impedit voluptates est eveniet quibusdam neque quam ab id sunt ad veritatis
    molestias iure eligendi modi accusantium totam, nihil ipsa accusamus alias!
    Veniam magni aliquam velit iste consequatur fuga laborum quisquam cumque
    deserunt suscipit dolorum tempora aut dignissimos eaque minima explicabo
    natus, ducimus omnis consequuntur repudiandae, sapiente, facilis sequi.
    Impedit corrupti in unde vel tenetur consectetur atque sed officiis? Iure
    fugiat numquam laborum quis. Qui sunt inventore recusandae quae magni
    tempora earum odit labore nesciunt adipisci, mollitia, perferendis impedit
    expedita ex voluptate. Recusandae expedita eligendi consequuntur! Sunt
    expedita dignissimos cupiditate perspiciatis optio rerum vitae minus. Culpa,
    sint illum, inventore repellendus facilis expedita rem, ullam nam nostrum
    magnam nesciunt quia! Placeat aspernatur provident accusamus, sit impedit
    quo eius, voluptatum delectus aliquid, alias excepturi consequatur eveniet
    molestias voluptatibus sapiente labore cum? Consequuntur quae dignissimos
    quod saepe excepturi voluptate ipsa maiores quibusdam, magnam neque iure eum
    soluta provident sint maxime a possimus? Eligendi odio voluptates ducimus?
    Accusantium, explicabo. Consequatur sit nesciunt fuga. Mollitia a impedit
    error dolorem, autem aspernatur? Quisquam excepturi in quo voluptatem non
    suscipit eaque vero debitis cumque explicabo atque dolorum consectetur autem
    impedit et quae dignissimos nulla modi, nobis expedita minus fugiat
    quibusdam blanditiis? Nostrum a aspernatur impedit iure perferendis culpa
    neque hic ab, excepturi inventore? Dignissimos praesentium sed quisquam unde
    mollitia, consectetur quae expedita repudiandae ab nulla? Reprehenderit
    debitis nesciunt eaque amet, quibusdam quaerat assumenda voluptatum dolore
    officiis. Incidunt officiis sunt id quaerat voluptate. Rerum maxime nemo
    facere dignissimos, labore illum fugit dolore quae totam voluptate quasi
    distinctio deserunt alias temporibus itaque quos perspiciatis omnis nesciunt
    quas dolorum, repudiandae commodi aperiam modi. Nemo tempore voluptates
    velit dolorum, animi at maxime illo eveniet quam libero quia fuga, deleniti
    sit qui atque tempora, vitae perferendis neque ea beatae a harum. Ea velit
    error suscipit eaque accusantium voluptate dolor sit hic assumenda beatae
    tempore dolorem praesentium cumque quas impedit ipsa iusto, laboriosam et
    vitae rerum odio rem cum! Natus eum veniam officiis aut velit
    exercitationem. Fugiat accusantium fuga cupiditate quidem voluptatibus nisi
    saepe. Corporis, eveniet temporibus. Facilis amet velit asperiores omnis
    sequi assumenda fuga temporibus libero eum ea, fugiat autem ullam, ab
    officiis magni perspiciatis saepe, fugit numquam pariatur quod neque
    voluptates. Explicabo voluptatem quo expedita perspiciatis error molestias
    cumque a vero possimus necessitatibus. Id assumenda minus eos nobis quia
    maiores animi veniam et doloremque dolore, error accusamus consequatur
    beatae, rem tenetur sunt excepturi harum, velit atque magni? Sint, magnam,
    repellendus cupiditate obcaecati porro eaque consectetur nesciunt reiciendis
    suscipit praesentium maxime ratione commodi similique accusantium alias esse
    sequi quisquam. Corporis asperiores fuga accusantium, esse tempore voluptas
    nihil temporibus eius hic dolor, qui animi maxime id sint! Veniam minus
    reiciendis qui reprehenderit nesciunt voluptatibus aliquam accusantium sed
    facilis consectetur voluptatem nobis quis rem culpa neque dolor quidem,
    beatae explicabo est aut numquam pariatur ut natus! Tenetur non cumque
    magnam ullam voluptatibus optio libero iure commodi autem blanditiis quidem
    officiis, vitae quam similique aperiam fugiat, quod veritatis veniam
    incidunt velit nesciunt rem quisquam! Ex iusto molestias similique provident
    sunt quibusdam, impedit incidunt distinctio perferendis praesentium, officia
    magnam, blanditiis neque consequatur architecto natus earum culpa rerum. Hic
    minus, explicabo facilis itaque magnam accusantium pariatur quibusdam natus
    corrupti numquam totam asperiores porro fugit. Repellat consequatur magni
    iure, mollitia inventore dicta accusantium optio voluptatum quo ducimus quis
    molestiae molestias eius esse?
    <!-- <UIPreloader v-if="pending" />
      <p v-else>Привет {{ fN }}</p>

      <button class="btn" @click="authStore.logUserOut()">logout</button> -->
  </div>
</template>
