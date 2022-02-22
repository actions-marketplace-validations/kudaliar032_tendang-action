# Tendang Action

[![Test tendang action](https://github.com/kudaliar032/tendang-action/actions/workflows/tendang-action-test.yaml/badge.svg?branch=main&event=push)](https://github.com/kudaliar032/tendang-action/actions/workflows/tendang-action-test.yaml)

## Inputs

| Name | Required | Default | Description |
| --- | :---: | --- | --- |
| url | ✅ | | Tendang simple and secure deployment proxy URL. |
| token | ✅ | | Valid token for deployment. |
| name | ✅ | | Deployment name, must be valid with the token. |
| value | ❎ | | Value to be passed to tendang proxy, cannot use multi values. |

## Example usage

```yaml
name: deploy apps
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: tendang
        uses: kudaliar032/tendang-action@v1
        with:
          url: ${{ secrets.TENDANG_URL }}
          token: ${{ secrets.TENDANG_TOKEN }}
          name: "the-app"
          value: ${{ github.sha }}
```

## Credits

Simple and secure deployment proxy [tendang](https://github.com/BlankOn/tendang).
