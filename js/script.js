const { createApp } = Vue;
const {DateTime} = luxon;

createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Denise L. R.',
                    avatar: '../img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Monkey D. Federico',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Lele Mora il P.',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Roberto moto GP.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Cristian S.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Goccette',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Mc john Domenique Cristian',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Cassone Cassius G.',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],

            searchContact: '',

            newMessage: '',

            activeContact: {},
            
        }
    },

    mounted() {

        this.activeContact = this.contacts[0]

    },

    methods: {
        changeActiveContact(index) {

            const iX = this.contacts.indexOf(this.research[index])

            this.activeContact = this.contacts[iX]

        },

        addMessage() {

            this.activeContact.messages.push({date: new Date().toLocaleTimeString(), message: this.newMessage, status: 'sent'})

            this.newMessage= '';

            setTimeout(() => {
                
                const received = {
                    message: 'ok',
                    status: 'received'
                }

                this.activeContact.messages.push({date: new Date().toLocaleTimeString(), message: received.message, status: received.status})

            }, 1000);
            
        },

        deleteMessage(leX) {

            console.log(leX)
            const index = this.activeContact.messages.indexOf(leX)

            
            if (leX.length == 0) {
                
                this.activeContact.messages.splice(0, 1)
                
            } else {

                this.activeContact.messages.splice(index, 1)

            }
            console.log(index)

        },
    },

    computed: {
        research() {

            return this.contacts.filter(contact => {

               return contact.name.toLowerCase().includes(this.searchContact.toLowerCase())

            })
       },
    }

}).mount('#app')