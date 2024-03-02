# be-mediating [TODO]

*be-linked" support one-way mediating between host and child:

```html
<host-element>
    #shadow
    <script nomodule>
        export const readOnlyHandler = ({remoteInstance, $0}) => ({
            checked: remoteInstance.readOnly ? 'on' : 'off',
        });
    </script>
    <toggle-element enh-be-linked='
        When read only property of host changes assign result of read only handler to $0. 
    '></toggle-element>
    <be-hive></be-hive>
</host-element>
```

and between child and host

```html
<host-element>
    #shadow
        <script nomodule>
            export const myHandler = ({remoteInstance, $0}) => ({

            })
        </script>
        <toggle-element be-linked='
            On toggle event of $0 assign result of my handler to host.
        '>
        <be-hive></be-hive>
</host-element>
```

*be-mediating allows us to combine the two:

```html
<mood-stone>
    #shadow
        <script nomodule be-mediating='between /isHappy and @isChecked'>
            export const upFlow=({}) => {

            }
            export const downFlow=({}) => {

            }
        </script>
        <toggle-element name=isChecked></toggle-element>
</mood-stone>
```