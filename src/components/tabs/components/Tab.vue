<template>
    <div
             class="tabs-component-panel"
             :id="name"
             v-show="isActive"
             role="tabpanel"
              >
        <slot />
    </div>
</template>

<script>
//
// :aria-hidden="! isActive"
    export default {
        props: {
            id: { default: null },
            name: { required: true },
            prefix: { default: '' },
            suffix: { default: '' },
            isDisabled:{ default: false },
        },
        data: () => ({
            isActive: false,
            isVisible: true,
        }),

        mounted() {

            // setTimeout(() => {
            //     if (this.name === 'First tab') {
            //         this.isActive = true;
            //     }
            // }, 1000)
        },
        computed: {
            header() {
                return this.prefix + this.name + this.suffix;
            },
            hash() {
                if (this.isDisabled) {
                    return '#';
                }
                return this.id ?
                    '#' + this.id :
                    '#' + this.name.toLowerCase().replace(/ /g, '-');
            },
        },
    };
</script>
