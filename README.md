# capacitor-bio-auth

Bioauth plugin supports capacitor 3

## Install

```bash
npm install capacitor-bio-auth
npx cap sync
```

## API

<docgen-index>

* [`isAvailable()`](#isavailable)
* [`verify(...)`](#verify)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isAvailable()

```typescript
isAvailable() => any
```

**Returns:** <code>any</code>

--------------------


### verify(...)

```typescript
verify(options: { reason: string; }) => any
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ reason: string; }</code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### AvailableOptions

| Prop         | Type                                            |
| ------------ | ----------------------------------------------- |
| **`has`**    | <code>boolean</code>                            |
| **`status`** | <code><a href="#errorcode">ErrorCode</a></code> |


#### ErrorCode

| Prop              | Type                |
| ----------------- | ------------------- |
| **`error`**       | <code>number</code> |
| **`description`** | <code>string</code> |


#### VerifyOptions

| Prop           | Type                                            |
| -------------- | ----------------------------------------------- |
| **`verified`** | <code>boolean</code>                            |
| **`status`**   | <code><a href="#errorcode">ErrorCode</a></code> |

</docgen-api>
