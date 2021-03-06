const uuidv4 = require('uuid/v4');

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert('elements', [
        {
            id: uuidv4(),
            name_en: '¾ front somersault',
            name_nl: 'Zweefsalto',
            position: 'C',
            fig_code: '3 –',
            position_code: 'o',
            diff_trampoline: 3,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '¾ front somersault',
            name_nl: 'Zweefsalto',
            position: 'B',
            fig_code: '3 –',
            position_code: '<',
            diff_trampoline: 3,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '¾ front somersault',
            name_nl: 'Zweefsalto',
            position: 'A',
            fig_code: '3 –',
            position_code: '/',
            diff_trampoline: 3,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Front somersault',
            name_nl: 'Salto voorover',
            position: 'C',
            fig_code: '4 –',
            position_code: 'o',
            diff_trampoline: 5,
            diff_dmt: 5,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Front somersault',
            name_nl: 'Salto voorover',
            position: 'B',
            fig_code: '4 –',
            position_code: '<',
            diff_trampoline: 6,
            diff_dmt: 6,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Front somersault',
            name_nl: 'Salto voorover',
            position: 'A',
            fig_code: '4 –',
            position_code: '/',
            diff_trampoline: 6,
            diff_dmt: 6,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Barani',
            name_nl: 'Barani',
            position: 'C',
            fig_code: '4 1',
            position_code: 'o',
            diff_trampoline: 6,
            diff_dmt: 7,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Barani',
            name_nl: 'Barani',
            position: 'B',
            fig_code: '4 1',
            position_code: '<',
            diff_trampoline: 6,
            diff_dmt: 7,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Barani',
            name_nl: 'Barani',
            position: 'A',
            fig_code: '4 1',
            position_code: '/',
            diff_trampoline: 6,
            diff_dmt: 7,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Rudolph / Rudy',
            name_nl: '1 ½ Schroef voorover (Rudolph)',
            position: '',
            fig_code: '4 3',
            position_code: '',
            diff_trampoline: 8,
            diff_dmt: 12,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Randolph / Randy',
            name_nl: '2 ½ Schroef voorover (Randolph)',
            position: '',
            fig_code: '4 5',
            position_code: '',
            diff_trampoline: 10,
            diff_dmt: 19,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Adolph',
            name_nl: '3 ½ Schroef voorover (Adolph)',
            position: '',
            fig_code: '4 7',
            position_code: '',
            diff_trampoline: 11,
            diff_dmt: 28,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Ball out',
            name_nl: 'Baby fliffis',
            position: 'C',
            fig_code: '5 – 1',
            position_code: 'o',
            diff_trampoline: 7,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Ball out',
            name_nl: 'Baby fliffis',
            position: 'B',
            fig_code: '5 – 1',
            position_code: '<',
            diff_trampoline: 7,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Ball out',
            name_nl: 'Baby fliffis',
            position: 'A',
            fig_code: '5 – 1',
            position_code: '/',
            diff_trampoline: 7,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Rudy ball out',
            name_nl: 'Baby rudy',
            position: '',
            fig_code: '5 – 3',
            position_code: '',
            diff_trampoline: 9,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '1 ¾ front somersault',
            name_nl: '1 ¾ salto voorover',
            position: 'C',
            fig_code: '7 – –',
            position_code: 'o',
            diff_trampoline: 8,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '1 ¾ front somersault',
            name_nl: '1 ¾ salto voorover',
            position: 'B',
            fig_code: '7 – –',
            position_code: '<',
            diff_trampoline: 9,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '1 ¾ front somersault',
            name_nl: '1 ¾ salto voorover',
            position: 'A',
            fig_code: '7 – –',
            position_code: '/',
            diff_trampoline: 9,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half out Fliffis',
            name_nl: 'Fliffis',
            position: 'C',
            fig_code: '8 – 1',
            position_code: 'o',
            diff_trampoline: 11,
            diff_dmt: 24,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half out Fliffis',
            name_nl: 'Fliffis',
            position: 'B',
            fig_code: '8 – 1',
            position_code: '<',
            diff_trampoline: 13,
            diff_dmt: 28,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half out Fliffis',
            name_nl: 'Fliffis',
            position: 'A',
            fig_code: '8 – 1',
            position_code: '/',
            diff_trampoline: 13,
            diff_dmt: 32,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in',
            name_nl: 'Tsukahara',
            position: 'C',
            fig_code: '8 1 –',
            position_code: 'o',
            diff_trampoline: 11,
            diff_dmt: 24,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in',
            name_nl: 'Tsukahara',
            position: 'B',
            fig_code: '8 1 –',
            position_code: '<',
            diff_trampoline: 13,
            diff_dmt: 28,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in',
            name_nl: 'Tsukahara',
            position: 'A',
            fig_code: '8 1 –',
            position_code: '/',
            diff_trampoline: 13,
            diff_dmt: 32,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Half out',
            name_nl: 'Vol in half uit',
            position: 'C',
            fig_code: '8 2 1',
            position_code: 'o',
            diff_trampoline: 13,
            diff_dmt: 32,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Half out',
            name_nl: 'Vol in half uit',
            position: 'B',
            fig_code: '8 2 1',
            position_code: '<',
            diff_trampoline: 15,
            diff_dmt: 36,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Half out',
            name_nl: 'Vol in half uit',
            position: 'A',
            fig_code: '8 2 1',
            position_code: '/',
            diff_trampoline: 15,
            diff_dmt: 40,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Rudy out',
            name_nl: 'Fliffis Rudy',
            position: 'C',
            fig_code: '8 – 3',
            position_code: 'o',
            diff_trampoline: 13,
            diff_dmt: 32,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Rudy out',
            name_nl: 'Fliffis Rudy',
            position: 'B',
            fig_code: '8 – 3',
            position_code: '<',
            diff_trampoline: 15,
            diff_dmt: 36,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Rudy out',
            name_nl: 'Fliffis Rudy',
            position: 'A',
            fig_code: '8 – 3',
            position_code: '/',
            diff_trampoline: 15,
            diff_dmt: 40,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Rudy out',
            name_nl: 'Vol in Rudy uit',
            position: 'C',
            fig_code: '8 2 3',
            position_code: 'o',
            diff_trampoline: 15,
            diff_dmt: 40,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Rudy out',
            name_nl: 'Vol in Rudy uit',
            position: 'B',
            fig_code: '8 2 3',
            position_code: '<',
            diff_trampoline: 17,
            diff_dmt: 44,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Rudy out',
            name_nl: 'Vol in Rudy uit',
            position: 'A',
            fig_code: '8 2 3',
            position_code: '/',
            diff_trampoline: 17,
            diff_dmt: 48,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Randy out',
            name_nl: 'Fliffis Randy',
            position: 'C',
            fig_code: '8 – 5',
            position_code: 'o',
            diff_trampoline: 15,
            diff_dmt: 40,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Randy out',
            name_nl: 'Fliffis Randy',
            position: 'B',
            fig_code: '8 – 5',
            position_code: '<',
            diff_trampoline: 17,
            diff_dmt: 44,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Randy out',
            name_nl: 'Vol in Randy uit',
            position: 'C',
            fig_code: '8 2 5',
            position_code: 'o',
            diff_trampoline: 17,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Randy out',
            name_nl: 'Vol in Randy uit',
            position: 'B',
            fig_code: '8 2 5',
            position_code: '<',
            diff_trampoline: 19,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half out double ball out',
            name_nl: 'Super baby',
            position: 'C',
            fig_code: '9 – – 1',
            position_code: 'o',
            diff_trampoline: 12,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Halfout double ball out',
            name_nl: 'Super baby',
            position: 'B',
            fig_code: '9 – – 1',
            position_code: '<',
            diff_trampoline: 14,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '2 ¾ front somersault',
            name_nl: '2 ¾ front somersault',
            position: 'C',
            fig_code: '11 – – –',
            position_code: 'o',
            diff_trampoline: 13,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '2 ¾ front somersault',
            name_nl: '2 ¾ front somersault',
            position: 'B',
            fig_code: '11 – – –',
            position_code: '<',
            diff_trampoline: 15,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half out Triffis',
            name_nl: 'Triffis',
            position: 'C',
            fig_code: '12 – – 1',
            position_code: 'o',
            diff_trampoline: 17,
            diff_dmt: 51,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half out Triffis',
            name_nl: 'Triffis',
            position: 'B',
            fig_code: '12 – – 1',
            position_code: '<',
            diff_trampoline: 20,
            diff_dmt: 59,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half out Triffis',
            name_nl: 'Triffis',
            position: 'A',
            fig_code: '12 – – 1',
            position_code: '/',
            diff_trampoline: 20,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in half out Triffis',
            name_nl: 'Vol in Triffis',
            position: 'C',
            fig_code: '12 2 – 1',
            position_code: 'o',
            diff_trampoline: 19,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in half out Triffis',
            name_nl: 'Vol in Triffis',
            position: 'A',
            fig_code: '12 2 – 1',
            position_code: '/',
            diff_trampoline: 22,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Rudi out Triffis',
            name_nl: 'Triffis Rudy',
            position: 'C',
            fig_code: '12 – – 3',
            position_code: 'o',
            diff_trampoline: 19,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Rudi out Triffis',
            name_nl: 'Triffis Rudy',
            position: 'A',
            fig_code: '12 – – 3',
            position_code: '/',
            diff_trampoline: 22,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full middle half out Triffis',
            name_nl: '',
            position: 'C',
            fig_code: '12 – 2 1',
            position_code: 'o',
            diff_trampoline: 19,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full middle half out Triffis',
            name_nl: '',
            position: 'A',
            fig_code: '12 – 2 1',
            position_code: '/',
            diff_trampoline: 22,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in rudy out Triffis',
            name_nl: '',
            position: 'C',
            fig_code: '12 2 – 3',
            position_code: 'o',
            diff_trampoline: 21,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in rudy out Triffis',
            name_nl: '',
            position: 'B',
            fig_code: '12 2 – 3',
            position_code: '<',
            diff_trampoline: 24,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half out Quadriffis',
            name_nl: 'Quadriffis',
            position: 'C',
            fig_code: '16 – – – 1 ',
            position_code: 'o',
            diff_trampoline: 23,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half out Quadriffis',
            name_nl: 'Quadriffis',
            position: 'B',
            fig_code: '16 – – – 1 ',
            position_code: '<',
            diff_trampoline: 27,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '¾ back somersault',
            name_nl: 'Salto achterover tot buik',
            position: 'C',
            fig_code: '3 –',
            position_code: 'o',
            diff_trampoline: 3,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '¾ back somersault',
            name_nl: 'Salto achterover tot buik',
            position: 'B',
            fig_code: '3 –',
            position_code: '<',
            diff_trampoline: 3,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: '¾ back somersault',
            name_nl: 'Salto achterover tot buik',
            position: 'A',
            fig_code: '3 –',
            position_code: '/',
            diff_trampoline: 3,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Back somersault',
            name_nl: 'Salto achterover',
            position: 'C',
            fig_code: '4 –',
            position_code: 'o',
            diff_trampoline: 5,
            diff_dmt: 5,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Back somersault',
            name_nl: 'Salto achterover',
            position: 'B',
            fig_code: '4 –',
            position_code: '<',
            diff_trampoline: 6,
            diff_dmt: 6,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Back somersault',
            name_nl: 'Salto achterover',
            position: 'A',
            fig_code: '4 –',
            position_code: '/',
            diff_trampoline: 6,
            diff_dmt: 6,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Back ss with 1/1 twist/ Full',
            name_nl: '1/1 schroef achterover',
            position: '',
            fig_code: '4 2',
            position_code: '',
            diff_trampoline: 7,
            diff_dmt: 9,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Back ss with 2/1 twist',
            name_nl: '2/1 schroef achterover',
            position: '',
            fig_code: '4 4',
            position_code: '',
            diff_trampoline: 9,
            diff_dmt: 15,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Back ss with 3/1 twist',
            name_nl: '3/1 schroef achterover',
            position: '',
            fig_code: '4 6',
            position_code: '',
            diff_trampoline: 11,
            diff_dmt: 23,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Back ss with 4/1 twist',
            name_nl: '4/1 schroef achterover',
            position: '',
            fig_code: '4 8',
            position_code: '',
            diff_trampoline: 13,
            diff_dmt: 33,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Back ss with 5/1 twist',
            name_nl: '5/1 schroef achterover',
            position: '',
            fig_code: '4 10',
            position_code: '',
            diff_trampoline: 15,
            diff_dmt: 45,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Cody',
            name_nl: 'Cody',
            position: 'C',
            fig_code: '5 –',
            position_code: 'o',
            diff_trampoline: 6,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Cody',
            name_nl: 'Cody',
            position: 'B',
            fig_code: '5 –',
            position_code: '<',
            diff_trampoline: 7,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Cody',
            name_nl: 'Cody',
            position: 'A',
            fig_code: '5 –',
            position_code: '/',
            diff_trampoline: 7,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Double back somersault',
            name_nl: 'Dubbele salto achterover',
            position: 'C',
            fig_code: '8 – –',
            position_code: 'o',
            diff_trampoline: 10,
            diff_dmt: 20,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Double back somersault',
            name_nl: 'Dubbele salto achterover',
            position: 'B',
            fig_code: '8 – –',
            position_code: '<',
            diff_trampoline: 12,
            diff_dmt: 24,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Double back somersault',
            name_nl: 'Dubbele salto achterover',
            position: 'A',
            fig_code: '8 – –',
            position_code: '/',
            diff_trampoline: 12,
            diff_dmt: 28,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in Half out',
            name_nl: 'Half in Half uit',
            position: 'C',
            fig_code: '8 1 1',
            position_code: 'o',
            diff_trampoline: 12,
            diff_dmt: 28,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in Half out',
            name_nl: 'Half in Half uit',
            position: 'B',
            fig_code: '8 1 1',
            position_code: '<',
            diff_trampoline: 14,
            diff_dmt: 32,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in Half out',
            name_nl: 'Half in Half uit',
            position: 'A',
            fig_code: '8 1 1',
            position_code: '/',
            diff_trampoline: 14,
            diff_dmt: 36,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in',
            name_nl: 'Vol in Enkel uit',
            position: 'C',
            fig_code: '8 2 –',
            position_code: 'o',
            diff_trampoline: 12,
            diff_dmt: 28,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in',
            name_nl: 'Vol in Enkel uit',
            position: 'B',
            fig_code: '8 2 –',
            position_code: '<',
            diff_trampoline: 14,
            diff_dmt: 32,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in',
            name_nl: 'Vol in Enkel uit',
            position: 'A',
            fig_code: '8 2 –',
            position_code: '/',
            diff_trampoline: 14,
            diff_dmt: 36,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full out',
            name_nl: 'Enkel in Vol uit',
            position: 'C',
            fig_code: '8 – 2',
            position_code: 'o',
            diff_trampoline: 12,
            diff_dmt: 28,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full out',
            name_nl: 'Enkel in Vol uit',
            position: 'A',
            fig_code: '8 – 2',
            position_code: '/',
            diff_trampoline: 14,
            diff_dmt: 36,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Full out',
            name_nl: 'Vol in Vol uit',
            position: 'C',
            fig_code: '8 2 2',
            position_code: 'o',
            diff_trampoline: 14,
            diff_dmt: 36,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Ful in Full out',
            name_nl: 'Vol in Vol uit',
            position: 'A',
            fig_code: '8 2 2',
            position_code: '/',
            diff_trampoline: 16,
            diff_dmt: 44,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in Rudy out',
            name_nl: '',
            position: 'C',
            fig_code: '8 1 3',
            position_code: 'o',
            diff_trampoline: 14,
            diff_dmt: 36,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in Rudy out',
            name_nl: '',
            position: 'B',
            fig_code: '8 1 3',
            position_code: '<',
            diff_trampoline: 16,
            diff_dmt: 40,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in Rudy out',
            name_nl: '',
            position: 'A',
            fig_code: '8 1 3',
            position_code: '/',
            diff_trampoline: 16,
            diff_dmt: 44,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Double-full out',
            name_nl: '',
            position: 'C',
            fig_code: '8 2 4',
            position_code: 'o',
            diff_trampoline: 16,
            diff_dmt: 44,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Double-full out',
            name_nl: '',
            position: 'A',
            fig_code: '8 2 4',
            position_code: '/',
            diff_trampoline: 18,
            diff_dmt: 52,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Rudy in Rudy out',
            name_nl: '',
            position: 'C',
            fig_code: '8 3 3',
            position_code: 'o',
            diff_trampoline: 16,
            diff_dmt: null,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in Randy out',
            name_nl: '',
            position: 'C',
            fig_code: '8 1 5',
            position_code: 'o',
            diff_trampoline: 16,
            diff_dmt: 44,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Half in Randy out',
            name_nl: '',
            position: 'B',
            fig_code: '8 1 5',
            position_code: '<',
            diff_trampoline: 18,
            diff_dmt: 48,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Double-full in Double-full out',
            name_nl: '',
            position: 'C',
            fig_code: '8 4 4',
            position_code: 'o',
            diff_trampoline: 18,
            diff_dmt: 52,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Double-full in Double-full out',
            name_nl: '',
            position: 'A',
            fig_code: '8 4 4',
            position_code: '/',
            diff_trampoline: 20,
            diff_dmt: 60,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Triple Back',
            name_nl: '',
            position: 'C',
            fig_code: '12 – – –',
            position_code: 'o',
            diff_trampoline: 16,
            diff_dmt: 45,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Triple Back',
            name_nl: '',
            position: 'B',
            fig_code: '12 – – –',
            position_code: '<',
            diff_trampoline: 19,
            diff_dmt: 53,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Triple Back',
            name_nl: '',
            position: 'A',
            fig_code: '12 – – –',
            position_code: '/',
            diff_trampoline: 19,
            diff_dmt: 61,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Triple',
            name_nl: '',
            position: 'C',
            fig_code: '12 2 – –',
            position_code: 'o',
            diff_trampoline: 18,
            diff_dmt: 57,
            created_at: new Date(),
        },
        {
            id: uuidv4(),
            name_en: 'Full in Triple',
            name_nl: '',
            position: 'B',
            fig_code: '12 2 – –',
            position_code: '<',
            diff_trampoline: 21,
            diff_dmt: 65,
            created_at: new Date(),
        },
    ], {}),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {}),
};
